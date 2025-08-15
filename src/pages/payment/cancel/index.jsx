import { XCircle, Home } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from '../../../components/Row';
import { Helmet } from 'react-helmet';

const PaymentCancelBasic = () => {
  const navigate = useNavigate();

  const params = useMemo(() => {
    const sp = new URLSearchParams(window.location.search);
    if (![...sp.keys()].length) {
      return null;
    }

    return {
      code: sp.get('code') ?? undefined,
      id: sp.get('id') ?? undefined,
      cancel: sp.get('cancel') ?? undefined,
      status: sp.get('status') ?? undefined,
      orderCode: sp.get('orderCode') ?? undefined,
    };
  }, []);

  useEffect(() => {
    if (!params) {
      navigate('/*', { replace: true });
    }
  }, [params, navigate]);

  if (!params) return null;

  const message =
    params.status === 'CANCELLED' || params.cancel === 'true'
      ? 'Giao dịch đã bị hủy.'
      : 'Không xác định trạng thái giao dịch.';

  return (
    <>
      <Helmet>
        <title>Fortune | Giao dịch</title>
      </Helmet>
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">
            <div className="flex items-center gap-4 p-6 border-b bg-red-50">
              <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Thanh toán bị hủy
                </h1>
                <p className="text-base text-gray-700">{message}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 text-base">
              <Row label="Mã đơn hàng" value={params.orderCode || '—'} />
              <Row
                label="Trạng thái"
                value={
                  params.status === 'CANCELLED'
                    ? 'Đã hủy'
                    : params.status || '—'
                }
              />
              <Row label="Mã giao dịch" value={params.id || '—'} />
            </div>

            <div className="p-6 border-t bg-gray-50">
              <button
                onClick={() => navigate('/')}
                className="w-full inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium py-3 transition-colors"
              >
                <Home className="w-5 h-5" />
                Về trang chủ
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Nếu cần hỗ trợ, vui lòng liên hệ CSKH và cung cấp mã đơn hàng.
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentCancelBasic;
