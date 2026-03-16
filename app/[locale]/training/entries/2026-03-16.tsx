import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-16',
  title: 'Bắt đầu học Testing và tìm hiểu cấu trúc HTML',
  content: (
    <>
      <p>
        Hôm nay mình bắt đầu hai hành trình học mới: Software Testing và HTML.
        Đây là ngày đầu tiên theo kế hoạch học Testing 6 tháng và cũng là ngày
        tiếp tục lộ trình HTML.
      </p>

      <h4>Software Testing - Ngày 1: Software Testing là gì?</h4>
      <p>
        Mình dành thời gian đọc và tìm hiểu về kiểm thử phần mềm (Software
        Testing). Đây là bước đầu tiên trong Phase 1 của kế hoạch học Testing.
      </p>
      <ul>
        <li>
          <strong>Đọc về định nghĩa và mục đích của Software Testing</strong> -
          Software Testing là quá trình kiểm tra và đánh giá phần mềm để đảm
          bảo nó hoạt động đúng như mong đợi. Mục đích chính là tìm ra lỗi
          (bugs) trước khi sản phẩm đến tay người dùng.
        </li>
        <li>
          <strong>Tìm hiểu tại sao Testing quan trọng trong SDLC</strong> -
          Testing giúp phát hiện lỗi sớm, giảm chi phí sửa lỗi, đảm bảo chất
          lượng sản phẩm và tăng sự tin tưởng của người dùng. Trong vòng đời
          phát triển phần mềm (SDLC), testing đóng vai trò kiểm soát chất
          lượng ở mọi giai đoạn.
        </li>
        <li>
          <strong>Ghi chú các thuật ngữ quan trọng</strong> - Một số thuật ngữ
          mình học được hôm nay: Bug/Defect (lỗi), Test Case (trường hợp kiểm
          thử), Test Plan (kế hoạch kiểm thử), QA (Quality Assurance - đảm bảo
          chất lượng), QC (Quality Control - kiểm soát chất lượng), SDLC
          (Software Development Life Cycle), STLC (Software Testing Life Cycle).
        </li>
      </ul>

      <h4>HTML - Cấu trúc tài liệu HTML và các thẻ phổ biến</h4>
      <p>
        Song song với việc học Testing, mình cũng tiếp tục học HTML theo lộ
        trình đã lên. Mục tiêu hôm nay là hiểu cấu trúc của một tài liệu HTML
        và học các thẻ phổ biến nhất.
      </p>
      <ul>
        <li>
          <strong>DOCTYPE &amp; html/head/body</strong> - Mọi trang HTML đều bắt
          đầu bằng <code>&lt;!DOCTYPE html&gt;</code> để khai báo phiên bản
          HTML. Thẻ <code>&lt;html&gt;</code> bao bọc toàn bộ trang,{' '}
          <code>&lt;head&gt;</code> chứa thông tin meta (title, charset, CSS
          links...), và <code>&lt;body&gt;</code> chứa nội dung hiển thị.
        </li>
        <li>
          <strong>Headings &amp; paragraphs</strong> - HTML có 6 cấp tiêu đề từ{' '}
          <code>&lt;h1&gt;</code> đến <code>&lt;h6&gt;</code>, và thẻ{' '}
          <code>&lt;p&gt;</code> dùng cho đoạn văn bản.
        </li>
        <li>
          <strong>Links &amp; images</strong> - Thẻ{' '}
          <code>&lt;a href=&quot;...&quot;&gt;</code> tạo liên kết và thẻ{' '}
          <code>&lt;img src=&quot;...&quot; alt=&quot;...&quot;&gt;</code> hiển
          thị hình ảnh. Thuộc tính <code>alt</code> rất quan trọng cho
          accessibility.
        </li>
        <li>
          <strong>Lists (ul, ol, li)</strong> - Danh sách không thứ tự dùng{' '}
          <code>&lt;ul&gt;</code>, danh sách có thứ tự dùng{' '}
          <code>&lt;ol&gt;</code>, và mỗi mục trong danh sách dùng{' '}
          <code>&lt;li&gt;</code>.
        </li>
        <li>
          <strong>Inline vs block elements</strong> - Block elements (như{' '}
          <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{' '}
          <code>&lt;h1&gt;</code>) chiếm toàn bộ chiều rộng và xuống dòng.
          Inline elements (như <code>&lt;span&gt;</code>,{' '}
          <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>) chỉ chiếm đúng
          kích thước nội dung và nằm trên cùng một dòng.
        </li>
      </ul>

      <h4>Ví dụ - Cấu trúc HTML cơ bản với các thẻ phổ biến:</h4>
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Trang HTML của mình</title>
  </head>
  <body>
    <h1>Tiêu đề chính</h1>
    <p>Đây là một đoạn văn bản.</p>

    <h2>Danh sách việc cần làm</h2>
    <ul>
      <li>Học HTML</li>
      <li>Học CSS</li>
      <li>Học JavaScript</li>
    </ul>

    <a href="https://developer.mozilla.org">Tài liệu MDN</a>
    <img src="image.jpg" alt="Mô tả hình ảnh">
  </body>
</html>`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Việc học song song Testing và HTML giúp mình
        có cái nhìn đa chiều hơn. Khi học HTML, mình cũng bắt đầu suy nghĩ
        theo hướng tester: &quot;Nếu thiếu thẻ đóng thì sao?&quot;,
        &quot;Nếu alt text trống thì sao?&quot;. Đây là một thói quen tốt cần
        phát triển.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-16',
  title: 'Starting Software Testing and learning HTML document structure',
  content: (
    <>
      <p>
        Today I started two new learning paths: Software Testing and HTML. This
        is the first day of my 6-month Testing learning plan and also a
        continuation of my HTML roadmap.
      </p>

      <h4>Software Testing - Day 1: What is Software Testing?</h4>
      <p>
        I spent time reading and learning about Software Testing. This is the
        first step in Phase 1 of my Testing learning plan.
      </p>
      <ul>
        <li>
          <strong>Read about the definition and purpose of Software Testing</strong>{' '}
          - Software Testing is the process of examining and evaluating software
          to ensure it works as expected. The main purpose is to find bugs
          before the product reaches end users.
        </li>
        <li>
          <strong>Learn why testing matters in SDLC</strong> - Testing helps
          detect bugs early, reduces the cost of fixing errors, ensures product
          quality, and increases user trust. In the Software Development Life
          Cycle (SDLC), testing plays a quality control role at every stage.
        </li>
        <li>
          <strong>Take notes on key terminologies</strong> - Some key terms I
          learned today: Bug/Defect, Test Case, Test Plan, QA (Quality
          Assurance), QC (Quality Control), SDLC (Software Development Life
          Cycle), STLC (Software Testing Life Cycle).
        </li>
      </ul>

      <h4>HTML - Document structure and common tags</h4>
      <p>
        Alongside learning Testing, I also continued learning HTML according to
        my roadmap. Today&apos;s goal was to understand how an HTML document is
        structured and learn the most common tags.
      </p>
      <ul>
        <li>
          <strong>DOCTYPE &amp; html/head/body</strong> - Every HTML page starts
          with <code>&lt;!DOCTYPE html&gt;</code> to declare the HTML version.
          The <code>&lt;html&gt;</code> tag wraps the entire page,{' '}
          <code>&lt;head&gt;</code> contains meta information (title, charset,
          CSS links...), and <code>&lt;body&gt;</code> contains the visible
          content.
        </li>
        <li>
          <strong>Headings &amp; paragraphs</strong> - HTML has 6 heading levels
          from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, and the{' '}
          <code>&lt;p&gt;</code> tag is used for paragraphs.
        </li>
        <li>
          <strong>Links &amp; images</strong> - The{' '}
          <code>&lt;a href=&quot;...&quot;&gt;</code> tag creates links and the{' '}
          <code>&lt;img src=&quot;...&quot; alt=&quot;...&quot;&gt;</code> tag
          displays images. The <code>alt</code> attribute is very important for
          accessibility.
        </li>
        <li>
          <strong>Lists (ul, ol, li)</strong> - Unordered lists use{' '}
          <code>&lt;ul&gt;</code>, ordered lists use <code>&lt;ol&gt;</code>,
          and each list item uses <code>&lt;li&gt;</code>.
        </li>
        <li>
          <strong>Inline vs block elements</strong> - Block elements (like{' '}
          <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{' '}
          <code>&lt;h1&gt;</code>) take up the full width and start on a new
          line. Inline elements (like <code>&lt;span&gt;</code>,{' '}
          <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>) only take up as
          much width as their content and stay on the same line.
        </li>
      </ul>

      <h4>Example - Basic HTML structure with common tags:</h4>
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My HTML Page</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>

    <h2>To-do List</h2>
    <ul>
      <li>Learn HTML</li>
      <li>Learn CSS</li>
      <li>Learn JavaScript</li>
    </ul>

    <a href="https://developer.mozilla.org">MDN Docs</a>
    <img src="image.jpg" alt="Image description">
  </body>
</html>`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Learning Testing and HTML in parallel gives
        me a broader perspective. While learning HTML, I also started thinking
        like a tester: &quot;What if a closing tag is missing?&quot;, &quot;What
        if the alt text is empty?&quot;. This is a good habit to develop.
      </p>
    </>
  ),
};
