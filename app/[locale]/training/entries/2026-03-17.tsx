import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-17',
  title: 'Tìm hiểu SDLC và học HTML ngữ nghĩa (Semantic HTML)',
  content: (
    <>
      <p>
        Hôm nay mình tiếp tục học Testing với chủ đề về các mô hình phát triển
        phần mềm (SDLC), và học HTML ngữ nghĩa (Semantic HTML) để viết code
        HTML có ý nghĩa hơn.
      </p>

      <h4>Software Testing - Ngày 2: Vòng đời phát triển phần mềm (SDLC)</h4>
      <p>
        Hôm nay mình tìm hiểu các mô hình SDLC phổ biến và vai trò của
        Testing trong từng mô hình.
      </p>

      <h4>Các mô hình SDLC:</h4>
      <ul>
        <li>
          <strong>Waterfall (Thác nước)</strong> - Mô hình tuyến tính, các giai
          đoạn thực hiện tuần tự từ trên xuống: Requirements → Design →
          Implementation → Testing → Deployment → Maintenance. Testing chỉ bắt
          đầu sau khi code xong, nên lỗi phát hiện muộn và chi phí sửa cao.
        </li>
        <li>
          <strong>Agile</strong> - Phát triển theo từng vòng lặp ngắn (sprint,
          thường 2-4 tuần). Mỗi sprint đều có testing, nên lỗi được phát hiện
          sớm và liên tục. Tester tham gia ngay từ đầu, làm việc song song với
          developer.
        </li>
        <li>
          <strong>V-Model (Verification &amp; Validation)</strong> - Mở rộng từ
          Waterfall, mỗi giai đoạn phát triển có một giai đoạn testing tương
          ứng. Ví dụ: Requirements → Acceptance Testing, Design → System
          Testing, Coding → Unit Testing. Testing được lên kế hoạch song song
          với phát triển.
        </li>
      </ul>

      <h4>Testing phù hợp ở đâu trong từng mô hình?</h4>
      <ul>
        <li>
          <strong>Waterfall:</strong> Testing là một giai đoạn riêng biệt, diễn
          ra sau khi hoàn thành code. Nhược điểm là phát hiện lỗi muộn.
        </li>
        <li>
          <strong>Agile:</strong> Testing diễn ra liên tục trong mỗi sprint.
          Tester và developer làm việc cùng nhau, feedback nhanh chóng.
        </li>
        <li>
          <strong>V-Model:</strong> Mỗi cấp phát triển có cấp testing tương
          ứng. Test plan được chuẩn bị sớm, ngay khi có requirements.
        </li>
      </ul>

      <p>
        <strong>Nhận xét:</strong> Agile là mô hình phổ biến nhất hiện nay vì
        tính linh hoạt và khả năng phát hiện lỗi sớm. Đối với người mới bắt
        đầu học Testing như mình, hiểu Agile là rất quan trọng vì hầu hết các
        công ty đều đang sử dụng.
      </p>

      <h4>HTML - Semantic HTML (HTML ngữ nghĩa)</h4>
      <p>
        Mục tiêu hôm nay là học cách viết HTML có ý nghĩa hơn bằng các thẻ ngữ
        nghĩa, giúp cải thiện khả năng đọc code và SEO.
      </p>
      <ul>
        <li>
          <strong>header, nav, main, footer</strong> -{' '}
          <code>&lt;header&gt;</code> cho phần đầu trang,{' '}
          <code>&lt;nav&gt;</code> cho thanh điều hướng,{' '}
          <code>&lt;main&gt;</code> cho nội dung chính, và{' '}
          <code>&lt;footer&gt;</code> cho phần cuối trang. Các thẻ này giúp
          trình duyệt và công cụ tìm kiếm hiểu cấu trúc trang.
        </li>
        <li>
          <strong>section &amp; article</strong> -{' '}
          <code>&lt;section&gt;</code> nhóm nội dung liên quan theo chủ đề,{' '}
          <code>&lt;article&gt;</code> đại diện cho nội dung độc lập, có thể
          tái sử dụng (như bài viết blog, tin tức).
        </li>
        <li>
          <strong>aside &amp; figure</strong> - <code>&lt;aside&gt;</code> chứa
          nội dung phụ (sidebar, quảng cáo), <code>&lt;figure&gt;</code> bao
          bọc hình ảnh hoặc biểu đồ kèm{' '}
          <code>&lt;figcaption&gt;</code> để mô tả.
        </li>
        <li>
          <strong>Tại sao ngữ nghĩa quan trọng?</strong> - Cải thiện
          accessibility (trình đọc màn hình hiểu được cấu trúc trang), tốt hơn
          cho SEO (Google hiểu nội dung trang), code dễ đọc và bảo trì hơn.
        </li>
        <li>
          <strong>Thay thế div bằng thẻ ngữ nghĩa</strong> - Thay vì dùng{' '}
          <code>&lt;div class=&quot;header&quot;&gt;</code>, ta dùng{' '}
          <code>&lt;header&gt;</code>. Thay vì{' '}
          <code>&lt;div class=&quot;nav&quot;&gt;</code>, ta dùng{' '}
          <code>&lt;nav&gt;</code>. Code ngắn gọn và có ý nghĩa hơn.
        </li>
      </ul>

      <h4>Ví dụ - So sánh HTML không ngữ nghĩa vs ngữ nghĩa:</h4>
      <pre>
        <code>{`<!-- Không ngữ nghĩa (Bad) -->
<div class="header">
  <div class="nav">
    <a href="/">Trang chủ</a>
    <a href="/about">Giới thiệu</a>
  </div>
</div>
<div class="content">
  <div class="article">
    <h2>Tiêu đề bài viết</h2>
    <p>Nội dung bài viết...</p>
  </div>
  <div class="sidebar">Nội dung phụ</div>
</div>
<div class="footer">© 2026</div>

<!-- Ngữ nghĩa (Good) -->
<header>
  <nav>
    <a href="/">Trang chủ</a>
    <a href="/about">Giới thiệu</a>
  </nav>
</header>
<main>
  <article>
    <h2>Tiêu đề bài viết</h2>
    <p>Nội dung bài viết...</p>
  </article>
  <aside>Nội dung phụ</aside>
</main>
<footer>© 2026</footer>`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Semantic HTML không chỉ giúp code sạch hơn mà
        còn là nền tảng cho accessibility và SEO. Kết hợp với góc nhìn testing,
        mình nhận ra rằng việc kiểm tra xem một trang web có sử dụng đúng thẻ
        ngữ nghĩa cũng là một phần quan trọng trong kiểm thử giao diện.
      </p>

      <h4>Deploy trang web lên Vercel</h4>
      <p>
        Hôm nay mình cũng đã hoàn tất việc tìm hiểu và deploy trang web lên
        Vercel. Đây là một bước quan trọng để đưa dự án từ môi trường phát
        triển lên production, giúp mọi người có thể truy cập trang web trực
        tuyến.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-17',
  title: 'Learning SDLC models and Semantic HTML',
  content: (
    <>
      <p>
        Today I continued learning Testing with a focus on Software Development
        Life Cycle (SDLC) models, and learned about Semantic HTML to write more
        meaningful HTML code.
      </p>

      <h4>Software Testing - Day 2: Software Development Life Cycle (SDLC)</h4>
      <p>
        Today I studied the popular SDLC models and understood where testing
        fits in each one.
      </p>

      <h4>SDLC Models:</h4>
      <ul>
        <li>
          <strong>Waterfall</strong> - A linear model where phases are executed
          sequentially: Requirements → Design → Implementation → Testing →
          Deployment → Maintenance. Testing only starts after coding is
          complete, so bugs are found late and fixing costs are high.
        </li>
        <li>
          <strong>Agile</strong> - Development happens in short iterations
          (sprints, usually 2-4 weeks). Each sprint includes testing, so bugs
          are found early and continuously. Testers participate from the
          beginning, working alongside developers.
        </li>
        <li>
          <strong>V-Model (Verification &amp; Validation)</strong> - An
          extension of Waterfall where each development phase has a
          corresponding testing phase. For example: Requirements → Acceptance
          Testing, Design → System Testing, Coding → Unit Testing. Test
          planning happens in parallel with development.
        </li>
      </ul>

      <h4>Where does testing fit in each model?</h4>
      <ul>
        <li>
          <strong>Waterfall:</strong> Testing is a separate phase that occurs
          after coding is complete. The downside is that bugs are found late.
        </li>
        <li>
          <strong>Agile:</strong> Testing happens continuously within each
          sprint. Testers and developers work together with rapid feedback.
        </li>
        <li>
          <strong>V-Model:</strong> Each development level has a corresponding
          testing level. Test plans are prepared early, as soon as requirements
          are available.
        </li>
      </ul>

      <p>
        <strong>Reflection:</strong> Agile is the most popular model today due
        to its flexibility and ability to catch bugs early. As a beginner in
        Testing, understanding Agile is crucial since most companies are using
        it.
      </p>

      <h4>HTML - Semantic HTML</h4>
      <p>
        Today&apos;s goal was to learn how to write more meaningful HTML using
        semantic elements that improve readability and SEO.
      </p>
      <ul>
        <li>
          <strong>header, nav, main, footer</strong> -{' '}
          <code>&lt;header&gt;</code> for the page header,{' '}
          <code>&lt;nav&gt;</code> for navigation,{' '}
          <code>&lt;main&gt;</code> for the main content, and{' '}
          <code>&lt;footer&gt;</code> for the page footer. These tags help
          browsers and search engines understand page structure.
        </li>
        <li>
          <strong>section &amp; article</strong> -{' '}
          <code>&lt;section&gt;</code> groups related content by topic,{' '}
          <code>&lt;article&gt;</code> represents independent, reusable content
          (like blog posts, news articles).
        </li>
        <li>
          <strong>aside &amp; figure</strong> - <code>&lt;aside&gt;</code>{' '}
          contains supplementary content (sidebar, ads),{' '}
          <code>&lt;figure&gt;</code> wraps images or diagrams with{' '}
          <code>&lt;figcaption&gt;</code> for descriptions.
        </li>
        <li>
          <strong>Why semantics matter</strong> - Improves accessibility (screen
          readers can understand page structure), better for SEO (Google
          understands page content), and makes code easier to read and maintain.
        </li>
        <li>
          <strong>Replacing divs with semantic tags</strong> - Instead of{' '}
          <code>&lt;div class=&quot;header&quot;&gt;</code>, use{' '}
          <code>&lt;header&gt;</code>. Instead of{' '}
          <code>&lt;div class=&quot;nav&quot;&gt;</code>, use{' '}
          <code>&lt;nav&gt;</code>. The code becomes shorter and more
          meaningful.
        </li>
      </ul>

      <h4>Example - Non-semantic vs Semantic HTML:</h4>
      <pre>
        <code>{`<!-- Non-semantic (Bad) -->
<div class="header">
  <div class="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
<div class="content">
  <div class="article">
    <h2>Article Title</h2>
    <p>Article content...</p>
  </div>
  <div class="sidebar">Side content</div>
</div>
<div class="footer">© 2026</div>

<!-- Semantic (Good) -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
  <aside>Side content</aside>
</main>
<footer>© 2026</footer>`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Semantic HTML not only makes code cleaner
        but is also the foundation for accessibility and SEO. Combining this
        with a testing perspective, I realized that checking whether a website
        uses correct semantic tags is also an important part of UI testing.
      </p>

      <h4>Deploying the website to Vercel</h4>
      <p>
        Today I also completed researching and deploying the website to Vercel.
        This is an important step to move the project from the development
        environment to production, making the website accessible online for
        everyone.
      </p>
    </>
  ),
};
