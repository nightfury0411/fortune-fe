import { useMutation, useQuery } from '@tanstack/react-query';
import { getPlan, getPlanDownload } from '../../../services/plan';
import { Button } from 'antd';
import { useState } from 'react';

const PlanManagement = () => {
  const [downloadingPlanId, setDownloadingPlanId] = useState(null);

  const { data: plan } = useQuery({
    queryKey: ['plan'],
    queryFn: getPlan,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const { mutate: downloadMutate } = useMutation({
    mutationFn: async (planId) => {
      setDownloadingPlanId(planId);
      try {
        const res = await getPlanDownload(planId);
        const blob = new Blob([res.data], {
          type: res.headers['content-type'] || 'application/octet-stream',
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        let filename = 'plan-file';
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
        setDownloadingPlanId(null); // Reset trạng thái loading
      }
    },
    onError: (err) => {
      console.error('Download error:', err);
      setDownloadingPlanId(null); // Reset trạng thái loading khi có lỗi
    },
  });

  if (!plan?.data || plan.data.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg text-gray-600">Không có plan nào</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-14 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-14">
          {plan.data.map((planItem) => (
            <div
              key={planItem.plan_id}
              className="bg-white font-bold rounded-lg p-6 lg:p-8 flex flex-col items-center justify-between text-center text-blue-900 text-lg shadow-md min-h-[300px] lg:min-h-[370px] transition-shadow hover:shadow-lg"
            >
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="mb-4 text-base lg:text-lg font-bold">
                  {planItem.plan_name}
                </h3>
                <p className="text-sm font-normal text-gray-600 mb-4 line-clamp-3">
                  {planItem.plan_des}
                </p>
              </div>

              <div className="w-full">
                {planItem.fileUrl && (
                  <Button
                    type="primary"
                    onClick={() => downloadMutate(planItem.plan_id)}
                    className="w-full mt-4 px-4 py-2 text-white font-medium disabled:opacity-50 hover:bg-blue-50 rounded transition-colors"
                    loading={downloadingPlanId === planItem.plan_id}
                  >
                    Tải file
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanManagement;
