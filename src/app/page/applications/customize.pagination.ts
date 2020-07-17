import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
    itemsPerPageLabel = 'Số dòng mổi trang';
    getRangeLabel = (page, pageSize, length) => {
        page += 1;
        if (length === 0 || pageSize === 0) {
            return '0 Trong số ' + length;
        }
        length = Math.max(length, 0);
        let totalPage = 0;
        totalPage = Math.floor(length / pageSize);
        if (length !== pageSize) {
            totalPage += 1;
        }


        return 'Trang số ' + page + ' Trong số ' + totalPage;
    }
}
