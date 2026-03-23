import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-23',
  title: 'Ngày đầu học Testing',
  content: (
    <>
      <p>Hôm nay mình bắt đầu tìm hiểu Testing là gì.</p>

      <h4>Những gì mình học được</h4>
      <ul>
        <li>Testing giúp phát hiện lỗi trước khi người dùng gặp lỗi.</li>
        <li>Tester không chỉ “bấm thử”, mà còn phải hiểu quy trình kiểm thử.</li>
      </ul>

      <h4>Ghi chú</h4>
      <pre>
        <code>{`Bug = lỗi
Test case = trường hợp kiểm thử
Expected result = kết quả mong đợi`}</code>
      </pre>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-04-01',
  title: 'My first day learning Testing',
  content: (
    <>
      <p>Today I started learning what Testing is.</p>
    </>
  ),
};