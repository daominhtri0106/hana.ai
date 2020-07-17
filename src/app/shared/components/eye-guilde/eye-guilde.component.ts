import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS, StepState } from '@angular/cdk/stepper';
import { MatDialogRef } from '@angular/material/dialog';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eye-guilde',
  templateUrl: './eye-guilde.component.html',
  styleUrls: ['./eye-guilde.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class EyeGuildeComponent implements OnInit, AfterViewInit, OnDestroy {

  listEyeGuilde = [
    {
      title: 'Live chat chăm sóc khách hàng tập trung',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Ghi nhận cuộc chat comment, inbox trên tất cả các fanpage đang tích hợp vào ứng dụng. CSKH dễ dàng với sự hỗ trợ đắc lực từ các nhóm công cụ.'
    },
    {
      title: 'Đào tạo block và quy trình',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Tạo ra các block nội dung (văn bản, hình ảnh, bộ sưu tập,...) và quy trình tự động. Các nội dung này có thể được tái sử dụng khi đào tạo chatbot trả lời inbox, xử lý comment hoặc tạo QR Code/Reflink.'
    },
    {
      title: 'Đào tạo Hana tự động trả lời comment, inbox ',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Chatbot tự động trả lời comment và inbox từ Fanpage/Website 24/7'
    },
    {
      title: 'Cấu hình vòng đời khách hàng và phễu',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Dễ dàng quản lý danh sách tất cả khách hàng tương tác với fanpage và đo lường tỉ lệ chuyển đổi khách hàng theo vòng đời. Tạo phễu xử lý các nhu cầu của khách hàng và theo dõi hiệu quả bằng dashboard phễu.'
    },
    {
      title: 'Soạn kịch bản Marketing chăm sóc khách hàng',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Tạo các kịch bản remarketing để nuôi dưỡng khách hàng tiềm năng. Marketing inbound chuyên nghiệp với chi phí rẻ nhưng đem lại hiệu quả chuyển đổi khách hàng cao'
    },
    {
      title: 'Sử dụng QR Code/Reflink chuyển đổi khách hàng O2O',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Tạo các QR Code/URL và phân nguồn khách hàng từ quy trình hoặc block mà bạn đã cấu hình. Có thể sử dụng URL khi chạy quảng cáo trên các kênh online (shopee, lazada, sendo,...), hoặc dùng QR Code trên các ấn phẩm truyền thông để chuyển đổi khách hàng từ các nguồn khác nhau thành subcriber của fanpage.'
    },
    {
      title: 'Xây dựng quy trình làm việc (workflow) và tự động hoá giữa người và bot',
      url: 'https://www.youtube.com/embed/q3hPMD5DJg8',
      subtitle: 'Phối hợp linh hoạt giữa người và bot bằng các quy trình tự động xử lý khi có sự cập nhật về khách hàng (thông tin khách hàng, trạng thái vòng đời khách hàng,...) và cập nhật thông tin ticket. Tạo quy trình xử lý định kỳ đối với từng nhóm khách hàng và loại ticket.'
    }
  ];

  constructor(public dialogRef: MatDialogRef<EyeGuildeComponent>) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
  }

  onDone() {
    this.dialogRef.close();
  }
}
