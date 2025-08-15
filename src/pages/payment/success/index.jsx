import { CheckCircle, Home } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from '../../../components/Row';
import { formatCurrency } from '../../../utils';

const PaymentSuccessBasic = () => {
  const navigate = useNavigate();

  const params = useMemo(() => {
    const sp = new URLSearchParams(window.location.search);
    if (![...sp.keys()].length) {
      return null;
    }

    return {
      code: sp.get('code') ?? undefined,
      id: sp.get('id') ?? undefined,
      status: sp.get('status') ?? undefined,
      orderCode: sp.get('orderCode') ?? undefined,
      amount: sp.get('amount') ?? undefined,
      description: sp.get('description') ?? undefined,
    };
  }, []);

  useEffect(() => {
    if (!params) {
      navigate('/*', { replace: true });
    }
  }, [params, navigate]);

  if (!params) return null;

  const message =
    params.status === 'SUCCESS' || params.code === '00'
      ? 'Thanh toán đã được xử lý thành công.'
      : 'Không xác định trạng thái giao dịch.';

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">
          <div className="flex items-center gap-4 p-6 border-b bg-green-50">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Thanh toán thành công
              </h1>
              <p className="text-base text-gray-700">{message}</p>
            </div>
          </div>

          <div className="p-6 space-y-4 text-base">
            <Row label="Mã đơn hàng" value={params.orderCode || '—'} />
            <Row label="Trạng thái" value={params.status || '—'} />
            <Row label="Mã giao dịch" value={params.id || '—'} />
            <Row
              label="Số tiền"
              value={params.amount ? formatCurrency(params.amount) : '—'}
            />
            <Row label="Mô tả" value={params.description || '—'} />
          </div>

          <div className="p-6 border-t bg-gray-50">
            <button
              onClick={() => navigate('/')}
              className="w-full inline-flex items-center justify-center gap-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium py-3 transition-colors"
            >
              <Home className="w-5 h-5" />
              Về trang chủ
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Cảm ơn bạn đã sử dụng dịch vụ! Hãy giữ lại mã đơn hàng để tra cứu khi
          cần.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessBasic;
