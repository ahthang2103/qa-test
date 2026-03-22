import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-22',
  title: 'QA vs QC trong Testing & CSS: Flexbox Layout',
  content: (
    <>
      <p>
        Hôm nay mình tìm hiểu sự khác biệt giữa Quality Assurance (QA) và
        Quality Control (QC) - hai khái niệm thường bị nhầm lẫn trong ngành phần
        mềm. Về CSS, mình bắt đầu học Flexbox - một trong những công cụ layout
        mạnh mẽ nhất để xây dựng giao diện một chiều linh hoạt và responsive.
      </p>

      <h4>Software Testing - Ngày 7: QA vs QC</h4>

      <h4>Quality Assurance (QA) là gì?</h4>
      <p>
        <strong>QA (Quality Assurance)</strong> là quá trình đảm bảo chất lượng
        - tập trung vào <em>quy trình</em> sản xuất phần mềm. QA mang tính{' '}
        <strong>proactive</strong> (chủ động) - ngăn chặn lỗi xảy ra ngay từ đầu
        thay vì tìm lỗi sau khi đã có.
      </p>
      <ul>
        <li>
          <strong>Mục tiêu:</strong> Cải thiện và chuẩn hóa quy trình phát triển
          để lỗi không xảy ra
        </li>
        <li>
          <strong>Phạm vi:</strong> Toàn bộ vòng đời phát triển phần mềm (SDLC)
        </li>
        <li>
          <strong>Hoạt động:</strong> Xây dựng coding standards, review process,
          CI/CD pipeline, documentation guidelines, training
        </li>
        <li>
          <strong>Câu hỏi cốt lõi:</strong> &quot;Quy trình của chúng ta có đủ
          tốt để tạo ra phần mềm chất lượng không?&quot;
        </li>
      </ul>

      <h4>Quality Control (QC) là gì?</h4>
      <p>
        <strong>QC (Quality Control)</strong> là kiểm soát chất lượng - tập
        trung vào <em>sản phẩm</em> cụ thể. QC mang tính{' '}
        <strong>reactive</strong> (phản ứng) - tìm và sửa lỗi trong sản phẩm đã
        được tạo ra.
      </p>
      <ul>
        <li>
          <strong>Mục tiêu:</strong> Phát hiện lỗi trong sản phẩm và đảm bảo sản
          phẩm đạt yêu cầu
        </li>
        <li>
          <strong>Phạm vi:</strong> Sản phẩm/tính năng cụ thể đang được kiểm tra
        </li>
        <li>
          <strong>Hoạt động:</strong> Test cases, bug reporting, test execution,
          regression testing
        </li>
        <li>
          <strong>Câu hỏi cốt lõi:</strong> &quot;Sản phẩm này có đáp ứng yêu
          cầu đặt ra không?&quot;
        </li>
      </ul>

      <h4>So sánh QA và QC</h4>
      <pre>
        <code>{`┌─────────────────┬──────────────────────────┬─────────────────────────┐
│                 │       QA                 │       QC                │
├─────────────────┼──────────────────────────┼─────────────────────────┤
│ Tập trung       │ Quy trình (Process)      │ Sản phẩm (Product)      │
│ Cách tiếp cận   │ Proactive (ngăn lỗi)     │ Reactive (tìm lỗi)      │
│ Mục tiêu        │ Cải thiện quy trình      │ Phát hiện lỗi           │
│ Phạm vi         │ Toàn bộ SDLC             │ Sản phẩm cụ thể         │
│ Người thực hiện │ Mọi thành viên team      │ Tester/QC team          │
│ Thời điểm       │ Xuyên suốt dự án         │ Sau khi có sản phẩm     │
│ Ví dụ           │ Code review, CI/CD       │ Test case, bug report   │
└─────────────────┴──────────────────────────┴─────────────────────────┘`}</code>
      </pre>

      <h4>Ví dụ thực tế</h4>

      <p>
        <strong>Ví dụ 1: Công ty phát triển ứng dụng ngân hàng</strong>
      </p>
      <ul>
        <li>
          <strong>QA activities:</strong> Thiết lập quy trình code review bắt
          buộc trước khi merge, yêu cầu unit test coverage tối thiểu 80%, tổ
          chức sprint retrospective để cải thiện quy trình, chuẩn hóa tài liệu
          API
        </li>
        <li>
          <strong>QC activities:</strong> Viết và chạy test case cho tính năng
          chuyển tiền, kiểm tra edge case (số tiền âm, tài khoản không đủ số
          dư), báo cáo bug khi phát hiện lỗi hiển thị số dư sai
        </li>
      </ul>

      <p>
        <strong>Ví dụ 2: E-commerce platform</strong>
      </p>
      <ul>
        <li>
          <strong>QA activities:</strong> Xây dựng automated testing pipeline
          (chạy test mỗi khi có commit), định nghĩa Definition of Done cho mỗi
          user story, tổ chức knowledge sharing về security best practices
        </li>
        <li>
          <strong>QC activities:</strong> Test luồng checkout từ đầu đến cuối,
          kiểm tra tính năng thanh toán với các loại thẻ khác nhau, xác nhận
          email xác nhận đơn hàng được gửi đúng
        </li>
      </ul>

      <p>
        <strong>Ví dụ 3: Startup phát triển nhanh</strong>
      </p>
      <ul>
        <li>
          <strong>QA problem:</strong> Không có quy trình review - developer
          push thẳng lên main, không có test coverage requirement. Kết quả:
          production liên tục bị lỗi vì không ai kiểm tra tác động của thay đổi
        </li>
        <li>
          <strong>QA solution:</strong> Áp dụng branch protection rule, bắt buộc
          PR review, thiết lập CI pipeline chạy automated test trước khi merge
        </li>
      </ul>

      <h4>QA và QC bổ sung lẫn nhau</h4>
      <p>
        QA tốt tạo ra môi trường để QC hoạt động hiệu quả hơn. Ví dụ: nếu QA
        thiết lập quy trình viết test case chuẩn, thì QC có thể thực hiện
        testing nhanh hơn và đầy đủ hơn. Ngược lại, phản hồi từ QC (bug reports,
        test failures) giúp QA cải thiện quy trình để ngăn các loại lỗi tương tự
        trong tương lai.
      </p>
      <pre>
        <code>{`Vòng cải tiến liên tục:
QA thiết lập quy trình → Developer xây dựng sản phẩm
    ↑                              ↓
QA cải thiện quy trình ← QC phát hiện lỗi & phản hồi`}</code>
      </pre>

      <h4>CSS - Ngày 2: Flexbox Layout</h4>
      <p>
        Mục tiêu: Dùng flexbox để xây dựng layout một chiều với hành vi linh
        hoạt, responsive.
      </p>

      <h4>display: flex - Kích hoạt Flexbox</h4>
      <p>
        Khi thêm <code>display: flex</code> vào một element (flex container),
        các con trực tiếp của nó (flex items) tự động được sắp xếp theo trục
        ngang (hàng).
      </p>
      <pre>
        <code>{`.container {
  display: flex;
  /* Mặc định: items xếp hàng ngang, không xuống dòng, căn đầu bên trái */
}`}</code>
      </pre>
      <ul>
        <li>
          <strong>Flex container:</strong> Element có <code>display: flex</code>
        </li>
        <li>
          <strong>Flex items:</strong> Con trực tiếp của flex container
        </li>
        <li>
          <strong>Main axis:</strong> Trục chính (mặc định: ngang, trái → phải)
        </li>
        <li>
          <strong>Cross axis:</strong> Trục vuông góc với main axis (mặc định:
          dọc)
        </li>
      </ul>

      <h4>flex-direction & flex-wrap</h4>
      <ul>
        <li>
          <strong>flex-direction</strong> - Xác định hướng của main axis:
          <ul>
            <li>
              <code>row</code> (mặc định) - Ngang, trái → phải
            </li>
            <li>
              <code>row-reverse</code> - Ngang, phải → trái
            </li>
            <li>
              <code>column</code> - Dọc, trên → dưới
            </li>
            <li>
              <code>column-reverse</code> - Dọc, dưới → trên
            </li>
          </ul>
        </li>
        <li>
          <strong>flex-wrap</strong> - Xác định items có xuống dòng khi hết chỗ
          không:
          <ul>
            <li>
              <code>nowrap</code> (mặc định) - Không xuống dòng, items co lại
            </li>
            <li>
              <code>wrap</code> - Xuống dòng khi hết chỗ
            </li>
            <li>
              <code>wrap-reverse</code> - Xuống dòng nhưng theo hướng ngược
            </li>
          </ul>
        </li>
        <li>
          <strong>flex-flow</strong> - Shorthand cho cả hai:{' '}
          <code>flex-flow: row wrap</code>
        </li>
      </ul>

      <h4>justify-content & align-items</h4>
      <ul>
        <li>
          <strong>justify-content</strong> - Căn chỉnh items theo{' '}
          <em>main axis</em>:
          <ul>
            <li>
              <code>flex-start</code> (mặc định) - Dồn về đầu
            </li>
            <li>
              <code>flex-end</code> - Dồn về cuối
            </li>
            <li>
              <code>center</code> - Căn giữa
            </li>
            <li>
              <code>space-between</code> - Khoảng cách đều nhau, item đầu/cuối
              sát cạnh
            </li>
            <li>
              <code>space-around</code> - Khoảng cách đều, item đầu/cuối có nửa
              khoảng cách
            </li>
            <li>
              <code>space-evenly</code> - Khoảng cách hoàn toàn đều nhau
            </li>
          </ul>
        </li>
        <li>
          <strong>align-items</strong> - Căn chỉnh items theo{' '}
          <em>cross axis</em>:
          <ul>
            <li>
              <code>stretch</code> (mặc định) - Kéo dài theo chiều cross axis
            </li>
            <li>
              <code>flex-start</code> - Căn về đầu cross axis
            </li>
            <li>
              <code>flex-end</code> - Căn về cuối cross axis
            </li>
            <li>
              <code>center</code> - Căn giữa cross axis
            </li>
            <li>
              <code>baseline</code> - Căn theo đường baseline của text
            </li>
          </ul>
        </li>
        <li>
          <strong>align-content</strong> - Căn chỉnh <em>nhiều dòng</em> khi
          dùng <code>flex-wrap</code>
          (tương tự justify-content nhưng cho cross axis khi có nhiều dòng)
        </li>
      </ul>

      <h4>flex-grow, flex-shrink, flex-basis</h4>
      <p>
        Ba thuộc tính này kiểm soát cách flex items phân chia không gian trong
        container.
      </p>
      <ul>
        <li>
          <strong>flex-basis</strong> - Kích thước ban đầu của item trước khi
          phân chia không gian dư. Mặc định: <code>auto</code> (dùng
          width/height của item).
          <pre>
            <code>{`.item { flex-basis: 200px; } /* Item bắt đầu với width 200px */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex-grow</strong> - Tỷ lệ item <em>lớn thêm</em> để lấp đầy
          không gian dư. Mặc định: <code>0</code> (không lớn thêm).
          <pre>
            <code>{`.item-a { flex-grow: 1; } /* Chiếm 1 phần không gian dư */
.item-b { flex-grow: 2; } /* Chiếm 2 phần không gian dư */
/* item-b sẽ rộng gấp đôi item-a trong phần không gian dư */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex-shrink</strong> - Tỷ lệ item <em>thu nhỏ</em> khi không
          đủ chỗ. Mặc định: <code>1</code> (thu nhỏ đều nhau).
          <pre>
            <code>{`.item-a { flex-shrink: 1; } /* Thu nhỏ bình thường */
.item-b { flex-shrink: 0; } /* Không thu nhỏ - giữ nguyên kích thước */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex shorthand</strong> - Viết tắt cho cả ba:{' '}
          <code>flex: grow shrink basis</code>
          <ul>
            <li>
              <code>flex: 1</code> = <code>flex: 1 1 0%</code> (grow, shrink,
              basis 0)
            </li>
            <li>
              <code>flex: auto</code> = <code>flex: 1 1 auto</code>
            </li>
            <li>
              <code>flex: none</code> = <code>flex: 0 0 auto</code> (cố định
              kích thước)
            </li>
          </ul>
        </li>
      </ul>

      <h4>Xây dựng Navbar với Flexbox</h4>
      <pre>
        <code>{`/* HTML structure */
<nav class="navbar">
  <a class="navbar__logo" href="/">MyApp</a>
  <ul class="navbar__links">
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div class="navbar__actions">
    <button class="btn btn--ghost">Log in</button>
    <button class="btn btn--primary">Sign up</button>
  </div>
</nav>

/* CSS */
.navbar {
  display: flex;
  align-items: center;        /* Căn giữa theo chiều dọc */
  justify-content: space-between; /* Logo bên trái, actions bên phải */
  padding: 0 24px;
  height: 64px;
  background: #1a202c;
}

.navbar__logo {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0; /* Logo không bị thu nhỏ */
}

.navbar__links {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  color: #a0aec0;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}

.navbar__links a:hover {
  color: white;
  background: #2d3748;
}

.navbar__actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0; /* Actions không bị thu nhỏ */
}

/* Responsive: ẩn links trên mobile */
@media (max-width: 768px) {
  .navbar__links {
    display: none; /* Ẩn trên mobile - sẽ dùng hamburger menu */
  }
}`}</code>
      </pre>

      <h4>Ví dụ thêm: Card layout với Flexbox</h4>
      <pre>
        <code>{`/* Grid of cards với flex-wrap */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}

.card {
  flex: 1 1 280px; /* grow, shrink, basis 280px */
  /* Items sẽ lớn để lấp đầy hàng, nhưng không nhỏ hơn 280px */
  /* Tự động xuống dòng khi không đủ chỗ */
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Vertically centering content trong card */
.card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* Đẩy footer xuống đáy */
}`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> QA và QC không phải là hai vai trò riêng biệt
        mà là hai góc độ tiếp cận chất lượng - một hướng về quy trình, một hướng
        về sản phẩm. Trong thực tế, một team tốt cần cả hai: QA để đảm bảo không
        có &quot;lỗi hệ thống&quot; trong cách làm việc, QC để đảm bảo từng tính
        năng cụ thể hoạt động đúng. Về Flexbox, đây là công cụ cực kỳ mạnh cho
        layout một chiều - navbar, card row, form fields, toolbar. Hiểu rõ{' '}
        <code>justify-content</code> (main axis) và <code>align-items</code>{' '}
        (cross axis) là chìa khóa để căn chỉnh mọi thứ một cách chính xác.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-22',
  title: 'QA vs QC in Testing & CSS: Flexbox Layout',
  content: (
    <>
      <p>
        Today I explored the difference between Quality Assurance (QA) and
        Quality Control (QC) — two concepts that are often confused in software
        development. For CSS, I started learning Flexbox — one of the most
        powerful layout tools for building flexible, responsive one-dimensional
        interfaces.
      </p>

      <h4>Software Testing - Day 7: QA vs QC</h4>

      <h4>What is Quality Assurance (QA)?</h4>
      <p>
        <strong>QA (Quality Assurance)</strong> is the process of ensuring
        quality — focused on the <em>process</em> of building software. QA is{' '}
        <strong>proactive</strong> — it prevents defects from occurring in the
        first place rather than finding them after the fact.
      </p>
      <ul>
        <li>
          <strong>Goal:</strong> Improve and standardize the development process
          so defects do not occur
        </li>
        <li>
          <strong>Scope:</strong> The entire software development lifecycle
          (SDLC)
        </li>
        <li>
          <strong>Activities:</strong> Establishing coding standards, review
          processes, CI/CD pipelines, documentation guidelines, and team
          training
        </li>
        <li>
          <strong>Core question:</strong> &quot;Is our process good enough to
          produce quality software?&quot;
        </li>
      </ul>

      <h4>What is Quality Control (QC)?</h4>
      <p>
        <strong>QC (Quality Control)</strong> is the process of controlling
        quality — focused on a specific <em>product</em>. QC is{' '}
        <strong>reactive</strong> — it finds and fixes defects in a product that
        has already been built.
      </p>
      <ul>
        <li>
          <strong>Goal:</strong> Detect defects in the product and ensure it
          meets requirements
        </li>
        <li>
          <strong>Scope:</strong> A specific product or feature being tested
        </li>
        <li>
          <strong>Activities:</strong> Writing test cases, bug reporting, test
          execution, regression testing
        </li>
        <li>
          <strong>Core question:</strong> &quot;Does this product meet the
          specified requirements?&quot;
        </li>
      </ul>

      <h4>QA vs QC Comparison</h4>
      <pre>
        <code>{`┌──────────────────┬──────────────────────────┬─────────────────────────┐
│                  │       QA                 │       QC                │
├──────────────────┼──────────────────────────┼─────────────────────────┤
│ Focus            │ Process                  │ Product                 │
│ Approach         │ Proactive (prevent)      │ Reactive (detect)       │
│ Goal             │ Improve the process      │ Find defects            │
│ Scope            │ Entire SDLC              │ Specific product        │
│ Who              │ Entire team              │ Tester / QC team        │
│ When             │ Throughout the project   │ After the product exists│
│ Examples         │ Code review, CI/CD       │ Test cases, bug reports │
└──────────────────┴──────────────────────────┴─────────────────────────┘`}</code>
      </pre>

      <h4>Real-World Examples</h4>

      <p>
        <strong>Example 1: Banking app development company</strong>
      </p>
      <ul>
        <li>
          <strong>QA activities:</strong> Enforcing mandatory code review before
          merging, requiring a minimum of 80% unit test coverage, holding sprint
          retrospectives to improve the workflow, standardizing API
          documentation
        </li>
        <li>
          <strong>QC activities:</strong> Writing and executing test cases for
          the money transfer feature, checking edge cases (negative amounts,
          insufficient balance), reporting a bug when the balance is displayed
          incorrectly
        </li>
      </ul>

      <p>
        <strong>Example 2: E-commerce platform</strong>
      </p>
      <ul>
        <li>
          <strong>QA activities:</strong> Building an automated testing pipeline
          (runs on every commit), defining a Definition of Done for each user
          story, organizing knowledge-sharing sessions on security best
          practices
        </li>
        <li>
          <strong>QC activities:</strong> Testing the end-to-end checkout flow,
          verifying payment processing with different card types, confirming
          that order confirmation emails are sent correctly
        </li>
      </ul>

      <p>
        <strong>Example 3: Fast-moving startup</strong>
      </p>
      <ul>
        <li>
          <strong>QA problem:</strong> No review process — developers push
          directly to main with no test coverage requirement. Result: production
          constantly breaks because no one checks the impact of changes
        </li>
        <li>
          <strong>QA solution:</strong> Applying branch protection rules,
          requiring PR reviews, setting up a CI pipeline that runs automated
          tests before merging
        </li>
      </ul>

      <h4>QA and QC Complement Each Other</h4>
      <p>
        Good QA creates an environment where QC works more effectively. For
        example, if QA establishes a standard for writing test cases, QC can
        execute testing faster and more thoroughly. In turn, feedback from QC —
        bug reports, test failures — helps QA improve the process to prevent
        similar defects in the future.
      </p>
      <pre>
        <code>{`Continuous improvement loop:
QA sets up the process → Developers build the product
      ↑                              ↓
QA improves the process ← QC finds defects & reports back`}</code>
      </pre>

      <h4>CSS - Day 2: Flexbox Layout</h4>
      <p>
        Goal: Use flexbox to build one-dimensional layouts with flexible,
        responsive behavior.
      </p>

      <h4>display: flex — Enabling Flexbox</h4>
      <p>
        Adding <code>display: flex</code> to an element (the flex container)
        makes its direct children (flex items) automatically arrange themselves
        along a horizontal row.
      </p>
      <pre>
        <code>{`.container {
  display: flex;
  /* Default: items in a row, no wrapping, aligned to the top-left */
}`}</code>
      </pre>
      <ul>
        <li>
          <strong>Flex container:</strong> The element with{' '}
          <code>display: flex</code>
        </li>
        <li>
          <strong>Flex items:</strong> Direct children of the flex container
        </li>
        <li>
          <strong>Main axis:</strong> The primary axis (default: horizontal,
          left to right)
        </li>
        <li>
          <strong>Cross axis:</strong> The axis perpendicular to main axis
          (default: vertical)
        </li>
      </ul>

      <h4>flex-direction & flex-wrap</h4>
      <ul>
        <li>
          <strong>flex-direction</strong> - Sets the direction of the main axis:
          <ul>
            <li>
              <code>row</code> (default) - Horizontal, left to right
            </li>
            <li>
              <code>row-reverse</code> - Horizontal, right to left
            </li>
            <li>
              <code>column</code> - Vertical, top to bottom
            </li>
            <li>
              <code>column-reverse</code> - Vertical, bottom to top
            </li>
          </ul>
        </li>
        <li>
          <strong>flex-wrap</strong> - Controls whether items wrap when there is
          no more space:
          <ul>
            <li>
              <code>nowrap</code> (default) - No wrapping; items shrink to fit
            </li>
            <li>
              <code>wrap</code> - Wraps to next line when out of space
            </li>
            <li>
              <code>wrap-reverse</code> - Wraps but in the reverse direction
            </li>
          </ul>
        </li>
        <li>
          <strong>flex-flow</strong> - Shorthand for both:{' '}
          <code>flex-flow: row wrap</code>
        </li>
      </ul>

      <h4>justify-content & align-items</h4>
      <ul>
        <li>
          <strong>justify-content</strong> - Aligns items along the{' '}
          <em>main axis</em>:
          <ul>
            <li>
              <code>flex-start</code> (default) - Pack items to the start
            </li>
            <li>
              <code>flex-end</code> - Pack items to the end
            </li>
            <li>
              <code>center</code> - Center items
            </li>
            <li>
              <code>space-between</code> - Even spacing; first/last items flush
              with edges
            </li>
            <li>
              <code>space-around</code> - Even spacing; first/last items have
              half-gap at edges
            </li>
            <li>
              <code>space-evenly</code> - Completely equal spacing everywhere
            </li>
          </ul>
        </li>
        <li>
          <strong>align-items</strong> - Aligns items along the{' '}
          <em>cross axis</em>:
          <ul>
            <li>
              <code>stretch</code> (default) - Stretch to fill the cross axis
            </li>
            <li>
              <code>flex-start</code> - Align to the start of cross axis
            </li>
            <li>
              <code>flex-end</code> - Align to the end of cross axis
            </li>
            <li>
              <code>center</code> - Center on cross axis
            </li>
            <li>
              <code>baseline</code> - Align by text baseline
            </li>
          </ul>
        </li>
        <li>
          <strong>align-content</strong> - Aligns <em>multiple rows</em> when
          using <code>flex-wrap</code> (like justify-content but for the cross
          axis with multiple rows)
        </li>
      </ul>

      <h4>flex-grow, flex-shrink, flex-basis</h4>
      <p>
        These three properties control how flex items distribute available space
        in the container.
      </p>
      <ul>
        <li>
          <strong>flex-basis</strong> - The initial size of an item before free
          space is distributed. Default: <code>auto</code> (uses the item&apos;s
          width/height).
          <pre>
            <code>{`.item { flex-basis: 200px; } /* Item starts at 200px wide */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex-grow</strong> - The ratio at which an item <em>grows</em>{' '}
          to fill extra space. Default: <code>0</code> (does not grow).
          <pre>
            <code>{`.item-a { flex-grow: 1; } /* Takes 1 share of free space */
.item-b { flex-grow: 2; } /* Takes 2 shares of free space */
/* item-b will be twice as wide as item-a in the free space */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex-shrink</strong> - The ratio at which an item{' '}
          <em>shrinks</em> when there is not enough space. Default:{' '}
          <code>1</code> (all items shrink equally).
          <pre>
            <code>{`.item-a { flex-shrink: 1; } /* Shrinks normally */
.item-b { flex-shrink: 0; } /* Does not shrink — keeps its size */`}</code>
          </pre>
        </li>
        <li>
          <strong>flex shorthand</strong> - Shorthand for all three:{' '}
          <code>flex: grow shrink basis</code>
          <ul>
            <li>
              <code>flex: 1</code> = <code>flex: 1 1 0%</code> (grow, shrink,
              basis 0)
            </li>
            <li>
              <code>flex: auto</code> = <code>flex: 1 1 auto</code>
            </li>
            <li>
              <code>flex: none</code> = <code>flex: 0 0 auto</code> (fixed size)
            </li>
          </ul>
        </li>
      </ul>

      <h4>Building a Navbar with Flexbox</h4>
      <pre>
        <code>{`/* HTML structure */
<nav class="navbar">
  <a class="navbar__logo" href="/">MyApp</a>
  <ul class="navbar__links">
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div class="navbar__actions">
    <button class="btn btn--ghost">Log in</button>
    <button class="btn btn--primary">Sign up</button>
  </div>
</nav>

/* CSS */
.navbar {
  display: flex;
  align-items: center;            /* Center items vertically */
  justify-content: space-between; /* Logo on left, actions on right */
  padding: 0 24px;
  height: 64px;
  background: #1a202c;
}

.navbar__logo {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0; /* Logo does not shrink */
}

.navbar__links {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  color: #a0aec0;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}

.navbar__links a:hover {
  color: white;
  background: #2d3748;
}

.navbar__actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0; /* Actions do not shrink */
}

/* Responsive: hide links on mobile */
@media (max-width: 768px) {
  .navbar__links {
    display: none; /* Hidden on mobile — use a hamburger menu instead */
  }
}`}</code>
      </pre>

      <h4>Bonus: Card Layout with Flexbox</h4>
      <pre>
        <code>{`/* Card grid with flex-wrap */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}

.card {
  flex: 1 1 280px; /* grow, shrink, basis 280px */
  /* Items grow to fill the row but never shrink below 280px */
  /* Automatically wraps to next line when space runs out */
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* Vertically stacking content inside a card */
.card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* Push footer to the bottom */
}`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> QA and QC are not two separate roles but
        two perspectives on quality — one focused on the process, the other on
        the product. In practice, a good team needs both: QA to ensure there are
        no &quot;systemic flaws&quot; in how the team works, and QC to verify
        that each specific feature works correctly. For Flexbox, this is an
        extremely powerful tool for one-dimensional layouts — navbars, card
        rows, form fields, toolbars. Understanding <code>justify-content</code>{' '}
        (main axis) and <code>align-items</code> (cross axis) is the key to
        aligning everything precisely.
      </p>
    </>
  ),
};
