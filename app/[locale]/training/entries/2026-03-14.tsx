import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-14',
  title: 'Bắt đầu hành trình - Tìm hiểu Software Testing là gì',
  content: (
    <>
      <p>
        Hôm nay mình bắt đầu tìm hiểu về Software Testing. Đây là những ghi chú
        đầu tiên của mình.
      </p>

      <h4>Software Testing là gì?</h4>
      <p>
        Software Testing (Kiểm thử phần mềm) là quá trình đánh giá và xác minh
        rằng một sản phẩm phần mềm hoạt động đúng như mong đợi.
      </p>

      <h4>Các loại testing cơ bản:</h4>
      <ul>
        <li>
          <strong>Manual Testing</strong> - Kiểm thử thủ công, người tester tự
          thực hiện các test case
        </li>
        <li>
          <strong>Automation Testing</strong> - Sử dụng công cụ/script để tự
          động hóa việc kiểm thử
        </li>
        <li>
          <strong>Unit Testing</strong> - Kiểm thử từng đơn vị nhỏ nhất của code
        </li>
        <li>
          <strong>Integration Testing</strong> - Kiểm thử sự tương tác giữa các
          module
        </li>
      </ul>

      <h4>Tài liệu tham khảo:</h4>
      <ul>
        <li>
          <a
            href="https://www.istqb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISTQB - International Software Testing Qualifications Board
          </a>
        </li>
        <li>
          <a
            href="https://www.guru99.com/software-testing.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guru99 - Software Testing Tutorial
          </a>
        </li>
      </ul>

      <h4>Ví dụ một test case đơn giản:</h4>
      <pre>
        <code>{`Test Case ID: TC001
Title: Kiểm tra đăng nhập với thông tin hợp lệ
Precondition: Tài khoản đã được đăng ký
Steps:
  1. Mở trang đăng nhập
  2. Nhập email hợp lệ
  3. Nhập mật khẩu đúng
  4. Nhấn nút "Đăng nhập"
Expected Result: Chuyển đến trang chủ thành công`}</code>
      </pre>

      <h4>Công cụ mình đã sử dụng hôm nay:</h4>
      <ul>
        <li>
          Mình có sử dụng{' '}
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT
          </a>{' '}
          để tạo ra một trang web để lưu lại những gì mình học mỗi ngày, xem như
          đó là một cuốn nhật ký của mình.
        </li>
        <li>
          Mình có đọc document để tạo SSH để thực hiện việc đẩy code lên GitHub.
          Mình chỉ sử dụng những tính năng cơ bản như là commit, push thôi.
        </li>
      </ul>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-14',
  title: 'Starting the journey - What is Software Testing?',
  content: (
    <>
      <p>
        Today I started learning about Software Testing. These are my first
        notes.
      </p>

      <h4>What is Software Testing?</h4>
      <p>
        Software Testing is the process of evaluating and verifying that a
        software product works as expected.
      </p>

      <h4>Basic types of testing:</h4>
      <ul>
        <li>
          <strong>Manual Testing</strong> - Testing done manually by a tester
          executing test cases
        </li>
        <li>
          <strong>Automation Testing</strong> - Using tools/scripts to automate
          the testing process
        </li>
        <li>
          <strong>Unit Testing</strong> - Testing the smallest units of code
        </li>
        <li>
          <strong>Integration Testing</strong> - Testing interactions between
          modules
        </li>
      </ul>

      <h4>References:</h4>
      <ul>
        <li>
          <a
            href="https://www.istqb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISTQB - International Software Testing Qualifications Board
          </a>
        </li>
        <li>
          <a
            href="https://www.guru99.com/software-testing.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guru99 - Software Testing Tutorial
          </a>
        </li>
      </ul>

      <h4>A simple test case example:</h4>
      <pre>
        <code>{`Test Case ID: TC001
Title: Verify login with valid credentials
Precondition: Account is already registered
Steps:
  1. Open the login page
  2. Enter a valid email
  3. Enter the correct password
  4. Click the "Login" button
Expected Result: Successfully redirected to the homepage`}</code>
      </pre>

      <h4>Tools I used today:</h4>
      <ul>
        <li>
          I used{' '}
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT
          </a>{' '}
          to create a website to save what I learn every day, like a personal
          diary.
        </li>
        <li>
          I read the documentation to set up SSH for pushing code to GitHub. I
          only use basic features like commit and push.
        </li>
      </ul>
    </>
  ),
};
