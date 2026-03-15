import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-15',
  title: 'Tham gia cộng đồng, lên kế hoạch học HTML/CSS/JS và tìm hiểu deploy',
  content: (
    <>
      <p>
        Hôm nay mình dành thời gian tham gia vào một số cộng đồng liên quan đến
        lập trình web, lên kế hoạch học HTML/CSS/JS, và tìm hiểu cách để chia
        sẻ trang web này ra công khai.
      </p>

      <h4>Tham gia cộng đồng học lập trình web</h4>
      <p>
        Mình đã tìm và tham gia một số nhóm/cộng đồng liên quan đến việc học
        tạo trang web. Việc có cộng đồng hỗ trợ rất quan trọng khi mới bắt đầu.
      </p>
      <ul>
        <li>
          <strong>Facebook Groups</strong> - Mình tham gia các nhóm như
          &quot;Lập trình Web Việt Nam&quot;, &quot;HTML CSS JavaScript
          Beginners&quot; để đặt câu hỏi và học từ kinh nghiệm của người khác.
        </li>
        <li>
          <strong>Discord servers</strong> - Có nhiều server Discord dành cho
          developer, mình join vào để có thể hỏi đáp theo thời gian thực.
        </li>
        <li>
          <strong>Reddit</strong> - Các subreddit như{' '}
          <a
            href="https://www.reddit.com/r/learnwebdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/learnwebdev
          </a>{' '}
          và{' '}
          <a
            href="https://www.reddit.com/r/webdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/webdev
          </a>{' '}
          rất hữu ích để đọc câu hỏi của người khác.
        </li>
      </ul>
      <p>
        <strong>Lưu ý quan trọng:</strong> Khi tham gia cộng đồng, mình nên đọc
        trước khi hỏi. Nhiều câu hỏi đã được trả lời rồi, tìm kiếm trong nhóm
        trước để không hỏi lại câu đã có câu trả lời.
      </p>

      <h4>Kế hoạch học HTML/CSS/JS</h4>
      <p>
        Sau khi tìm hiểu, mình biết rằng HTML, CSS và JavaScript là 3 thứ cốt
        lõi để tạo ra một trang web. Đây là cách mình hiểu vai trò của từng thứ:
      </p>
      <ul>
        <li>
          <strong>HTML</strong> - Là &quot;bộ xương&quot; của trang web, xác
          định cấu trúc và nội dung (tiêu đề, đoạn văn, hình ảnh, link...).
        </li>
        <li>
          <strong>CSS</strong> - Là &quot;bộ quần áo&quot;, quyết định giao
          diện trông như thế nào (màu sắc, font chữ, layout...).
        </li>
        <li>
          <strong>JavaScript</strong> - Là &quot;bộ não&quot;, làm cho trang
          web có thể tương tác được (click button, hiện ẩn nội dung, gọi
          API...).
        </li>
      </ul>

      <h4>Ví dụ đơn giản - HTML cơ bản:</h4>
      <pre>
        <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Trang web đầu tiên của mình</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là trang web đầu tiên của mình.</p>
    <a href="https://google.com">Đi đến Google</a>
  </body>
</html>`}</code>
      </pre>

      <h4>Lộ trình học mình tự lên:</h4>
      <ul>
        <li>
          <strong>Tuần 1-2:</strong> HTML cơ bản - tags, attributes, forms,
          tables
        </li>
        <li>
          <strong>Tuần 3-4:</strong> CSS cơ bản - selectors, box model,
          flexbox, màu sắc và font
        </li>
        <li>
          <strong>Tuần 5-8:</strong> JavaScript cơ bản - variables, functions,
          DOM manipulation, events
        </li>
        <li>
          <strong>Sau đó:</strong> Làm một dự án nhỏ kết hợp cả 3 thứ
        </li>
      </ul>

      <p>
        <strong>Tài nguyên học mình tìm được:</strong>
      </p>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools
          </a>{' '}
          - Tài liệu chi tiết, có thể thực hành trực tiếp trên trình duyệt
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            MDN Web Docs - Learn Web Development
          </a>{' '}
          - Tài liệu chính thống và đáng tin cậy nhất
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>{' '}
          - Học miễn phí theo bài bản, có chứng chỉ
        </li>
      </ul>

      <h4>Tìm hiểu về cách chia sẻ trang web công khai (Deploy)</h4>
      <p>
        Mình muốn người khác có thể xem được trang web này qua internet, không
        chỉ chạy trên máy mình. Đây gọi là &quot;deploy&quot; hoặc
        &quot;host&quot; trang web. Mình đã tìm hiểu và biết được một số lựa
        chọn phổ biến:
      </p>
      <ul>
        <li>
          <strong>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </strong>{' '}
          - Rất phù hợp với Next.js (framework mình đang dùng), deploy miễn phí
          và tự động khi push code lên GitHub.
        </li>
        <li>
          <strong>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Pages
            </a>
          </strong>{' '}
          - Miễn phí, dễ dùng, phù hợp cho trang web tĩnh (HTML/CSS/JS thuần).
        </li>
        <li>
          <strong>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </strong>{' '}
          - Tương tự Vercel, cũng miễn phí và dễ kết nối với GitHub.
        </li>
      </ul>

      <p>
        <strong>Lưu ý:</strong> Mình chưa thực hiện được bước này vì còn một số
        cấu hình cần tìm hiểu thêm. Mình sẽ dành thời gian nghiên cứu kỹ hơn
        về Vercel vì nó phù hợp nhất với trang web này. Mục tiêu là deploy được
        trong tuần tới.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-15',
  title: 'Joining communities, planning HTML/CSS/JS learning, and researching deployment',
  content: (
    <>
      <p>
        Today I spent time joining some web development communities, planning
        my HTML/CSS/JS learning path, and researching how to share this website
        publicly.
      </p>

      <h4>Joining web development communities</h4>
      <p>
        I found and joined several groups and communities related to learning
        web development. Having a supportive community is very important when
        you are just starting out.
      </p>
      <ul>
        <li>
          <strong>Facebook Groups</strong> - I joined groups like &quot;Web
          Development Vietnam&quot; and &quot;HTML CSS JavaScript Beginners&quot;
          to ask questions and learn from others&apos; experiences.
        </li>
        <li>
          <strong>Discord servers</strong> - There are many Discord servers for
          developers. I joined a few to ask questions in real time.
        </li>
        <li>
          <strong>Reddit</strong> - Subreddits like{' '}
          <a
            href="https://www.reddit.com/r/learnwebdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/learnwebdev
          </a>{' '}
          and{' '}
          <a
            href="https://www.reddit.com/r/webdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            r/webdev
          </a>{' '}
          are very useful for reading questions from others.
        </li>
      </ul>
      <p>
        <strong>Important note:</strong> When joining communities, I should read
        before asking. Many questions have already been answered, so I should
        search the group first to avoid asking something that already has an
        answer.
      </p>

      <h4>HTML/CSS/JS Learning Plan</h4>
      <p>
        After researching, I learned that HTML, CSS, and JavaScript are the 3
        core technologies for building a website. Here is how I understand each
        one:
      </p>
      <ul>
        <li>
          <strong>HTML</strong> - The &quot;skeleton&quot; of a webpage. It
          defines the structure and content (headings, paragraphs, images,
          links...).
        </li>
        <li>
          <strong>CSS</strong> - The &quot;clothing&quot;. It controls how the
          page looks (colors, fonts, layout...).
        </li>
        <li>
          <strong>JavaScript</strong> - The &quot;brain&quot;. It makes the
          page interactive (button clicks, show/hide content, API calls...).
        </li>
      </ul>

      <h4>Simple example - Basic HTML:</h4>
      <pre>
        <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My first website</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>This is my first website.</p>
    <a href="https://google.com">Go to Google</a>
  </body>
</html>`}</code>
      </pre>

      <h4>My self-made learning roadmap:</h4>
      <ul>
        <li>
          <strong>Week 1-2:</strong> HTML basics - tags, attributes, forms,
          tables
        </li>
        <li>
          <strong>Week 3-4:</strong> CSS basics - selectors, box model,
          flexbox, colors and fonts
        </li>
        <li>
          <strong>Week 5-8:</strong> JavaScript basics - variables, functions,
          DOM manipulation, events
        </li>
        <li>
          <strong>After that:</strong> Build a small project combining all 3
        </li>
      </ul>

      <p>
        <strong>Learning resources I found:</strong>
      </p>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools
          </a>{' '}
          - Detailed documentation with live practice directly in the browser
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            MDN Web Docs - Learn Web Development
          </a>{' '}
          - The most authoritative and reliable reference
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>{' '}
          - Free structured learning with certificates
        </li>
      </ul>

      <h4>Researching how to share the website publicly (Deployment)</h4>
      <p>
        I want others to be able to view this website over the internet, not
        just on my machine. This is called &quot;deploying&quot; or
        &quot;hosting&quot; a website. I did some research and found a few
        popular options:
      </p>
      <ul>
        <li>
          <strong>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </strong>{' '}
          - Great for Next.js (the framework this site uses). Free deployment
          that triggers automatically when you push code to GitHub.
        </li>
        <li>
          <strong>
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Pages
            </a>
          </strong>{' '}
          - Free and easy to use, ideal for static websites (plain
          HTML/CSS/JS).
        </li>
        <li>
          <strong>
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </strong>{' '}
          - Similar to Vercel, also free and easy to connect with GitHub.
        </li>
      </ul>

      <p>
        <strong>Note:</strong> I have not been able to complete this step yet
        because there are still some configurations I need to learn more about.
        I will spend more time researching Vercel since it is the best fit for
        this website. My goal is to get it deployed within the next week.
      </p>
    </>
  ),
};
