import { useMutation, useQuery } from '@tanstack/react-query';
import { getMiniGame, getMiniGameDownload } from '../../../services/minigames';
import { useState } from 'react';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';

const MinigameManagement = () => {
  const [downloadingGameId, setDownloadingGameId] = useState(null);

  const { data: minigames } = useQuery({
    queryKey: ['minigames'],
    queryFn: getMiniGame,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const { mutate: downloadMutate } = useMutation({
    mutationFn: async (miniGameId) => {
      setDownloadingGameId(miniGameId);
      try {
        const res = await getMiniGameDownload(miniGameId);
        const blob = new Blob([res.data], {
          type: res.headers['content-type'] || 'application/octet-stream',
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        let filename = 'minigame-file';
        const contentDisposition = res.headers['content-disposition'];
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(
            /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
          );
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1].replace(/['"]/g, '');
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download error:', error);
        throw error;
      } finally {
        setDownloadingGameId(null);
      }
    },
    onError: (err) => {
      console.error('Download error:', err);
      setDownloadingGameId(null);
    },
  });

  if (!minigames?.data || minigames.data.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg text-gray-600">Không có minigame nào</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Fortune | Minigames</title>
      </Helmet>
      <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-14 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-14">
            {minigames.data.map((game) => (
              <div
                key={game.miniGame_id}
                className="bg-white font-bold rounded-lg p-6 lg:p-8 flex flex-col items-center justify-between text-center text-blue-900 text-lg shadow-md min-h-[300px] lg:min-h-[370px] transition-shadow hover:shadow-lg"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="mb-4 text-base lg:text-lg font-bold">
                    {game.mG_name}
                  </h3>
                  <p className="text-sm font-normal text-gray-600 mb-4 line-clamp-3">
                    {game.mG_des}
                  </p>
                </div>

                <div className="w-full">
                  {game.fileUrl && (
                    <Button
                      type="primary"
                      onClick={() => downloadMutate(game.miniGame_id)}
                      className="w-full mt-4 px-4 py-2 text-white font-medium disabled:opacity-50 hover:bg-blue-50 rounded transition-colors"
                      loading={downloadingGameId === game.miniGame_id}
                    >
                      Tải file
                    </Button>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Lượt chơi: {game.count || 0}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MinigameManagement;
