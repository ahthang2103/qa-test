# Thang Do 2026 New Challenge

Website cá nhân ghi lại hành trình học tập, làm việc và phát triển của mình trong lĩnh vực **Software Testing**.  
Dự án này được xây dựng dựa trên template ban đầu và đã được chỉnh sửa lại theo nội dung, định hướng và portfolio cá nhân của mình.

## Giới thiệu

Website này được tạo ra như một nơi để mình:

- giới thiệu bản thân và mục tiêu nghề nghiệp
- ghi lại quá trình học tập
- tổng hợp kiến thức đã học
- lưu các bài thực hành và dự án luyện tập
- xây dựng kế hoạch học tập và lộ trình phát triển trong ngành Testing

Hiện tại website hỗ trợ nhiều ngôn ngữ:

- Tiếng Việt
- Tiếng Anh
- Tiếng Hàn

## Các trang chính

### 1. Trang chủ

Giới thiệu ngắn về bản thân, định hướng nghề nghiệp và lý do xây dựng website.

### 2. Giới thiệu

Hiển thị:

- thông tin cá nhân
- mục tiêu nghề nghiệp
- kỹ năng hiện có
- kinh nghiệm làm việc

### 3. Quá trình học tập

Nơi lưu lại các bài viết/nghiên cứu/ngày học của mình trong quá trình tự học Testing.

### 4. Tổng hợp kiến thức

Trang dùng để tổng hợp các kiến thức quan trọng đã học và ghi chú lại theo chủ đề.

### 5. Thực hành

Nơi lưu các bài thực hành, ví dụ test case, bug report, project luyện tập hoặc các bài tập mô phỏng công việc thực tế.

### 6. Kế hoạch

Hiển thị roadmap học tập và các kế hoạch học theo từng chủ đề như:

- HTML
- CSS
- JavaScript
- lộ trình trở thành Tester trong 6 tháng

## Công nghệ sử dụng

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **next-intl** để hỗ trợ đa ngôn ngữ

## Cấu trúc thư mục chính

```bash
app/
  [locale]/
    about/
    knowledge/
    plans/
    practices/
    training/
    layout.tsx
    page.tsx

components/
  Footer/
  Header/
  Introduction/
  LanguageSwitcher/
  Logo/
  PageLinks/
  ScrollToTop/

constants/
  app.ts
  routes.ts

i18n/
  request.ts
  routing.ts

messages/
  vi.json
  en.json
  kr.json


```
