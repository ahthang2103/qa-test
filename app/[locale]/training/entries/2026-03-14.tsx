import Link from 'next/link';

import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-14',
  title:
    'Ngày 1 - Trang web hoạt động thế nào? GitHub, SSH và kế hoạch 6 tháng',
  content: (
    <>
      <p>
        Hôm nay là ngày đầu tiên mình thật sự ngồi xuống và bắt đầu hành trình
        học. Mình tiếp thu được rất nhiều thuật ngữ mới và cảm thấy cực kỳ hứng
        thú - như đang mở ra một cánh cửa hoàn toàn mới vậy!
      </p>

      <h4>Một trang web vận hành như thế nào?</h4>
      <p>
        Mình đã tự hỏi: khi gõ <code>google.com</code> vào trình duyệt thì
        chuyện gì xảy ra? Sau khi research, mình hiểu được luồng hoạt động cơ
        bản như sau:
      </p>
      <ol>
        <li>
          <strong>Trình duyệt (Browser)</strong> gửi yêu cầu - bạn gõ URL, trình
          duyệt bắt đầu xử lý.
        </li>
        <li>
          <strong>DNS (Domain Name System)</strong> - giống như danh bạ điện
          thoại, chuyển tên miền <code>google.com</code> thành địa chỉ IP như{' '}
          <code>142.250.196.68</code> để máy tính biết tìm đến đâu.
        </li>
        <li>
          <strong>HTTP / HTTPS Request</strong> - trình duyệt gửi yêu cầu đến
          máy chủ. HTTPS là phiên bản bảo mật (có ổ khoá trên thanh địa chỉ).
        </li>
        <li>
          <strong>Server (Máy chủ)</strong> nhận yêu cầu, xử lý và trả về dữ
          liệu (thường là HTML, CSS, JavaScript).
        </li>
        <li>
          <strong>Trình duyệt render</strong> - đọc HTML để dựng cấu trúc trang,
          CSS để trang trí, JavaScript để tạo tương tác.
        </li>
      </ol>
      <pre>
        <code>{`[Bạn gõ URL]
     ↓
[DNS: google.com → 142.250.196.68]
     ↓
[HTTP Request → Server]
     ↓
[Server trả về HTML/CSS/JS]
     ↓
[Browser hiển thị trang web]`}</code>
      </pre>
      <p>
        <strong>Ghi chú:</strong> Frontend là phần người dùng nhìn thấy (HTML,
        CSS, JS). Backend là phần xử lý phía sau (database, logic nghiệp vụ).
        Một trang web hoàn chỉnh cần cả hai phối hợp với nhau.
      </p>

      <h4>Tạo trang web cá nhân để lưu lại hành trình học</h4>
      <p>
        Mình muốn có một nơi để ghi lại mọi thứ mình học mỗi ngày - vừa như một
        cuốn nhật ký, vừa là bài thực hành thực tế. Mình đã dùng{' '}
        <a
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChatGPT
        </a>{' '}
        để hỗ trợ tạo ra trang web này.
      </p>
      <p>
        <strong>Tại sao lại là trang web?</strong> Vì mình nghĩ đây là cách tốt
        nhất để vừa luyện tập, vừa có thể chia sẻ với người khác. Mỗi ngày mình
        học gì, làm gì đều được ghi lại ở đây - chính trang bạn đang đọc lúc
        này!
      </p>

      <h4>Lưu trữ code với GitHub và cấu hình SSH</h4>
      <p>
        Để không bị mất code và có thể quản lý phiên bản, mình đã tìm hiểu về
        Git và GitHub:
      </p>
      <ul>
        <li>
          <strong>Git</strong> - công cụ quản lý phiên bản code ngay trên máy
          tính của mình (local).
        </li>
        <li>
          <strong>GitHub</strong> - nền tảng lưu trữ code online, giống như
          Google Drive nhưng dành riêng cho lập trình viên.
        </li>
        <li>
          <strong>Repository (Repo)</strong> - thư mục dự án được Git quản lý.
        </li>
      </ul>
      <p>
        Mình đã đọc{' '}
        <a
          href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
          target="_blank"
          rel="noopener noreferrer"
        >
          tài liệu
        </a>{' '}
        và cài đặt <strong>SSH Key</strong> để kết nối máy tính với GitHub một
        cách bảo mật (không cần nhập mật khẩu mỗi lần):
      </p>
      <pre>
        <code>{`# Bước 1: Tạo SSH key trên máy
ssh-keygen -t ed25519 -C "email@example.com"

# Bước 2: Copy public key
cat ~/.ssh/id_ed25519.pub

# Bước 3: Dán vào GitHub → Settings → SSH Keys

# Bước 4: Kiểm tra kết nối
ssh -T git@github.com
# Kết quả: Hi username! You've successfully authenticated...`}</code>
      </pre>
      <p>Các lệnh Git cơ bản mình đã dùng:</p>
      <pre>
        <code>{`git add .           # Thêm tất cả file thay đổi vào staging
git commit -m "..."  # Lưu lại snapshot với mô tả
git push             # Đẩy code lên GitHub`}</code>
      </pre>
      <p>
        <strong>Ghi chú:</strong> SSH (Secure Shell) là giao thức bảo mật dùng
        cặp khoá Public/Private. Public key để trên GitHub, Private key giữ trên
        máy - chỉ máy tính của mình mới có thể xác thực.
      </p>

      <h4>Lập kế hoạch 6 tháng để trở thành Tester</h4>
      <p>
        Mình đã ngồi lại và lập ra một lộ trình cụ thể để phấn đấu trở thành
        Software Tester trong 6 tháng. Kế hoạch bao gồm các mốc học tập, công cụ
        cần thành thạo và chứng chỉ mục tiêu.
      </p>
      <p>
        <Link href="/plans/become-a-tester">
          Xem kế hoạch 6 tháng trở thành Tester của mình tại đây
        </Link>
      </p>

      <h4>Những thuật ngữ mới mình học được hôm nay</h4>
      <p>
        Đây là ngày đầu tiên mình tiếp xúc với rất nhiều từ ngữ kỹ thuật. Lúc
        đầu nghe có vẻ lạ nhưng khi hiểu ra thì thấy khá thú vị:
      </p>
      <ul>
        <li>
          <strong>Frontend</strong> - giao diện người dùng (những gì bạn nhìn
          thấy)
        </li>
        <li>
          <strong>Backend</strong> - logic xử lý phía sau hậu trường
        </li>
        <li>
          <strong>Client</strong> - thiết bị/phần mềm gửi yêu cầu (trình duyệt)
        </li>
        <li>
          <strong>Server</strong> - máy chủ nhận và xử lý yêu cầu
        </li>
        <li>
          <strong>DNS</strong> - Domain Name System, dịch tên miền thành IP
        </li>
        <li>
          <strong>HTTP / HTTPS</strong> - giao thức truyền dữ liệu giữa client
          và server
        </li>
        <li>
          <strong>HTML / CSS / JavaScript</strong> - bộ ba ngôn ngữ xây dựng
          giao diện web
        </li>
        <li>
          <strong>Git / GitHub</strong> - quản lý phiên bản và lưu trữ code
        </li>
        <li>
          <strong>SSH</strong> - giao thức kết nối bảo mật
        </li>
        <li>
          <strong>Repository (Repo)</strong> - kho chứa code của dự án
        </li>
        <li>
          <strong>Commit / Push</strong> - lưu và đẩy code lên cloud
        </li>
      </ul>
      <p>
        Mình cảm thấy rất phấn khích sau ngày học đầu tiên này! Có rất nhiều thứ
        cần học nhưng mỗi thuật ngữ mới hiểu được đều cho mình cảm giác tiến bộ
        rõ rệt.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-14',
  title: 'Day 1 - How websites work, GitHub, SSH, and my 6-month plan',
  content: (
    <>
      <p>
        Today was my very first real study day. I absorbed a ton of new
        terminology and felt incredibly excited - like opening a whole new door!
      </p>

      <h4>How does a website work?</h4>
      <p>
        I wondered: what actually happens when you type <code>google.com</code>{' '}
        into a browser? After some research, I understood the basic flow:
      </p>
      <ol>
        <li>
          <strong>Browser</strong> initiates a request - you type a URL and the
          browser starts processing it.
        </li>
        <li>
          <strong>DNS (Domain Name System)</strong> - acts like a phone book,
          translating <code>google.com</code> into an IP address like{' '}
          <code>142.250.196.68</code> so your computer knows where to go.
        </li>
        <li>
          <strong>HTTP / HTTPS Request</strong> - the browser sends a request to
          the server. HTTPS is the secure version (the padlock in the address
          bar).
        </li>
        <li>
          <strong>Server</strong> receives the request, processes it, and sends
          back data (usually HTML, CSS, and JavaScript).
        </li>
        <li>
          <strong>Browser renders</strong> - reads HTML for structure, CSS for
          styling, and JavaScript for interactivity.
        </li>
      </ol>
      <pre>
        <code>{`[You type a URL]
     ↓
[DNS: google.com → 142.250.196.68]
     ↓
[HTTP Request → Server]
     ↓
[Server returns HTML/CSS/JS]
     ↓
[Browser displays the page]`}</code>
      </pre>
      <p>
        <strong>Note:</strong> The Frontend is what users see (HTML, CSS, JS).
        The Backend handles logic behind the scenes (databases, business logic).
        A complete website needs both working together.
      </p>

      <h4>Building a personal website to document my journey</h4>
      <p>
        I wanted a place to record everything I learn each day - part diary,
        part hands-on practice. I used{' '}
        <a
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChatGPT
        </a>{' '}
        to help me build this website.
      </p>
      <p>
        <strong>Why a website?</strong> Because I think it&apos;s the best way
        to both practice and share what I learn. Everything I study and do each
        day gets recorded here - on the very page you&apos;re reading now!
      </p>

      <h4>Storing code with GitHub and configuring SSH</h4>
      <p>
        To avoid losing code and to manage versions properly, I learned about
        Git and GitHub:
      </p>
      <ul>
        <li>
          <strong>Git</strong> - a version control tool that runs locally on my
          machine.
        </li>
        <li>
          <strong>GitHub</strong> - an online platform for storing code, like
          Google Drive but built for developers.
        </li>
        <li>
          <strong>Repository (Repo)</strong> - a project folder managed by Git.
        </li>
      </ul>
      <p>
        I read the{' '}
        <a
          href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{' '}
        and set up an <strong>SSH Key</strong> to securely connect my machine to
        GitHub (no password needed each time):
      </p>
      <pre>
        <code>{`# Step 1: Generate SSH key on your machine
ssh-keygen -t ed25519 -C "email@example.com"

# Step 2: Copy the public key
cat ~/.ssh/id_ed25519.pub

# Step 3: Paste it into GitHub → Settings → SSH Keys

# Step 4: Test the connection
ssh -T git@github.com
# Output: Hi username! You've successfully authenticated...`}</code>
      </pre>
      <p>Basic Git commands I used:</p>
      <pre>
        <code>{`git add .           # Stage all changed files
git commit -m "..."  # Save a snapshot with a description
git push             # Push code up to GitHub`}</code>
      </pre>
      <p>
        <strong>Note:</strong> SSH (Secure Shell) uses a Public/Private key
        pair. The public key lives on GitHub; the private key stays on your
        machine - only your computer can authenticate.
      </p>

      <h4>Creating a 6-month plan to become a Tester</h4>
      <p>
        I sat down and mapped out a concrete roadmap to become a Software Tester
        within 6 months. The plan covers learning milestones, tools to master,
        and target certifications.
      </p>
      <p>
        <Link href="/plans/become-a-tester">
          View my 6-month plan to become a Tester here
        </Link>
      </p>

      <h4>New terms I learned today</h4>
      <p>
        This was the first day I encountered a lot of technical vocabulary. It
        sounded unfamiliar at first, but once it clicked, it all felt exciting:
      </p>
      <ul>
        <li>
          <strong>Frontend</strong> - the user interface (what you see on
          screen)
        </li>
        <li>
          <strong>Backend</strong> - the processing logic running behind the
          scenes
        </li>
        <li>
          <strong>Client</strong> - the device/software making requests (the
          browser)
        </li>
        <li>
          <strong>Server</strong> - the machine that receives and handles
          requests
        </li>
        <li>
          <strong>DNS</strong> - Domain Name System, translates domain names to
          IP addresses
        </li>
        <li>
          <strong>HTTP / HTTPS</strong> - protocols for transferring data
          between client and server
        </li>
        <li>
          <strong>HTML / CSS / JavaScript</strong> - the trio of languages for
          building web interfaces
        </li>
        <li>
          <strong>Git / GitHub</strong> - version control and code storage
        </li>
        <li>
          <strong>SSH</strong> - secure connection protocol
        </li>
        <li>
          <strong>Repository (Repo)</strong> - the container that holds a
          project&apos;s code
        </li>
        <li>
          <strong>Commit / Push</strong> - save and upload code to the cloud
        </li>
      </ul>
      <p>
        I feel incredibly pumped after this first day! There&apos;s so much to
        learn, but every new term I understand gives me a real sense of
        progress.
      </p>
    </>
  ),
};
