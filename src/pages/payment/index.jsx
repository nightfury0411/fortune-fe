import { Spin } from 'antd';
import {
  Check,
  CheckCircle,
  Clock,
  Copy,
  Info,
  Receipt,
  Star,
  XCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useClipboard } from '../../hooks/useClipboard';
import {
  formatAmountPayos,
  formatDate,
  getResponseCodeMessagePayos,
} from '../../utils';

const PayosReturn = () => {
  const [paymentData, setPaymentData] = useState(null);
  const { copiedField, copyToClipboard } = useClipboard();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const payload = {
      transactionMethod: 'PAYOS',
    };
    console.log('check payload', payload);
    let data = {};

    for (const [key, value] of urlParams.entries()) {
      data[key] = decodeURIComponent(value);
    }

    const mockPayosData = {
      success: {
        code: '00',
        desc: 'Thành công',
        orderCode: '123456789',
        amount: 50000,
        description: 'Thanh toán gói Premium 1 tháng',
        accountNumber: '12345678',
        reference: 'TF' + Date.now(),
        transactionDateTime: new Date()
          .toISOString()
          .replace('T', ' ')
          .slice(0, 19),
        currency: 'VND',
        paymentLinkId: '124c33293c43417ab7879e14c8d9eb18',
        counterAccountBankId: 'VCB',
        counterAccountBankName: 'Vietcombank',
        counterAccountName: 'NGUYEN VAN A',
        counterAccountNumber: '9876543210',
        virtualAccountName: 'PAYOS MERCHANT',
        virtualAccountNumber: '1234567890',
      },

      failed: {
        code: '02',
        desc: 'Giao dịch bị từ chối',
        orderCode: '123456790',
        amount: 30000,
        description: 'Thanh toán gói Basic 1 tháng',
        accountNumber: '12345678',
        reference: 'TF' + (Date.now() + 1000),
        transactionDateTime: new Date()
          .toISOString()
          .replace('T', ' ')
          .slice(0, 19),
        currency: 'VND',
        paymentLinkId: '124c33293c43417ab7879e14c8d9eb19',
        counterAccountBankId: 'TCB',
        counterAccountBankName: 'Techcombank',
        counterAccountName: '',
        counterAccountNumber: '',
        virtualAccountName: '',
        virtualAccountNumber: '',
      },

      pending: {
        code: '01',
        desc: 'Giao dịch chưa hoàn tất',
        orderCode: '123456791',
        amount: 100000,
        description: 'Thanh toán gói VIP 1 tháng',
        accountNumber: '12345678',
        reference: 'TF' + (Date.now() + 2000),
        transactionDateTime: new Date()
          .toISOString()
          .replace('T', ' ')
          .slice(0, 19),
        currency: 'VND',
        paymentLinkId: '124c33293c43417ab7879e14c8d9eb20',
        counterAccountBankId: 'MB',
        counterAccountBankName: 'MBBank',
        counterAccountName: 'TRAN THI B',
        counterAccountNumber: '5555666677',
        virtualAccountName: 'PAYOS MERCHANT',
        virtualAccountNumber: '1234567890',
      },
    };

    if (Object.keys(data).length === 0) {
      const mockType = 'success';
      data = mockPayosData[mockType];

      // navigate('/*');
      // return;
    }

    setPaymentData(data);
  }, []);

  const getStatusInfo = (code) => {
    if (code === '00') {
      return {
        status: 'Thành công',
        message: 'THANH TOÁN THÀNH CÔNG',
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-500',
      };
    } else if (code === '02') {
      return {
        status: 'Thất bại',
        message: 'THANH TOÁN THẤT BẠI',
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-500',
      };
    } else if (code === '01') {
      return {
        status: 'Đang chờ',
        message: 'ĐANG XỬ LÝ',
        icon: Clock,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-500',
      };
    } else {
      return {
        status: 'Không xác định',
        message: 'TRẠNG THÁI KHÔNG XÁC ĐỊNH',
        icon: Clock,
        color: 'text-gray-600',
        bgColor: 'bg-gray-500',
      };
    }
  };

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  const statusInfo = getStatusInfo(paymentData?.code);
  const StatusIcon = statusInfo?.icon;

  const isPaymentSuccessful = paymentData?.code === '00';

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl rounded-t-3xl border-b-4 border-green-600 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={'https://payos.vn/docs/img/logo.svg'}
                  alt="payos_logo"
                  className="w-12 h-12 bg-white rounded p-1"
                />
                <div>
                  <h1 className="text-2xl font-bold">PAYOS</h1>
                  <p className="text-green-100 text-sm">
                    Cổng thanh toán điện tử
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Receipt className="w-12 h-12 text-green-200 mb-2" />
                <div className="text-xs text-green-100">HÓA ĐƠN ĐIỆN TỬ</div>
              </div>
            </div>
          </div>

          <div className={`${statusInfo.bgColor} text-white py-4 px-6`}>
            <div className="flex items-center justify-center">
              <StatusIcon className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold tracking-wide">
                {statusInfo.message}
              </span>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-dashed border-gray-200">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  HÓA ĐƠN THANH TOÁN
                </h2>
                <p className="text-sm text-gray-600">
                  Mã đơn hàng: {paymentData?.orderCode}
                </p>
              </div>
              <div className="text-right">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color} bg-gray-100`}
                >
                  {statusInfo.status}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(paymentData?.transactionDateTime)}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Chi tiết thanh toán
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {paymentData?.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {formatAmountPayos(paymentData?.amount)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {paymentData?.currency}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Thông tin giao dịch
                  </h4>
                </div>

                <div className="divide-y divide-gray-100">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Mã đơn hàng</span>
                    <div className="flex items-center">
                      <span className="font-mono text-sm font-medium mr-2">
                        {paymentData?.orderCode}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(paymentData?.orderCode, 'orderCode')
                        }
                        className="text-gray-400 hover:text-green-600 transition-colors"
                      >
                        {copiedField === 'orderCode' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {paymentData?.counterAccountBankName && (
                    <div className="px-4 py-3 flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Ngân hàng</span>
                      <span className="font-medium text-sm">
                        {paymentData?.counterAccountBankName}
                      </span>
                    </div>
                  )}

                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Số tài khoản</span>
                    <span className="font-medium text-sm">
                      {paymentData?.accountNumber}
                    </span>
                  </div>

                  {paymentData?.reference && (
                    <div className="px-4 py-3 flex justify-between items-center">
                      <span className="text-gray-600 text-sm">
                        Mã tham chiếu
                      </span>
                      <div className="flex items-center">
                        <span className="font-mono text-sm font-medium mr-2">
                          {paymentData?.reference}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(paymentData?.reference, 'reference')
                          }
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          {copiedField === 'reference' ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {paymentData?.paymentLinkId && (
                    <div className="px-4 py-3 flex justify-between items-center">
                      <span className="text-gray-600 text-sm">
                        ID Link thanh toán
                      </span>
                      <div className="flex items-center">
                        <span className="font-mono text-sm font-medium mr-2">
                          {paymentData?.paymentLinkId}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              paymentData?.paymentLinkId,
                              'paymentLinkId',
                            )
                          }
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          {copiedField === 'paymentLinkId' ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="px-4 py-3 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Thời gian</span>
                    <span className="font-medium text-sm">
                      {formatDate(paymentData?.transactionDateTime)}
                    </span>
                  </div>

                  <div className="px-4 py-3 flex justify-between">
                    <span className="text-gray-600 text-sm block mb-1">
                      Trạng thái
                    </span>
                    <span className="text-sm text-gray-700 italic">
                      {getResponseCodeMessagePayos(paymentData?.code)}
                    </span>
                  </div>
                </div>
              </div>

              {isPaymentSuccessful && (
                <div className="bg-gradient-to-r from-green-50 to-indigo-50 rounded-xl p-4 border-2 border-green-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-800">TỔNG CỘNG</h3>
                      <p className="text-xs text-gray-600">
                        Số tiền đã thanh toán
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-green-600">
                        {formatAmountPayos(paymentData?.amount)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t border-gray-300">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">
                  Cảm ơn bạn đã sử dụng dịch vụ!
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Hóa đơn được tạo tự động bởi hệ thống PAYOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayosReturn;
