export type KnowledgeLocale = 'vi' | 'en' | 'kr';

type Localized<T> = {
  vi: T;
  en: T;
  kr?: T;
};

type ChapterSection = {
  id: string;
  title: Localized<string>;
  summary: Localized<string>;
  bullets: Localized<string[]>;
};

export type Chapter = {
  slug: string;
  number: number;
  studyMinutes: number;
  title: Localized<string>;
  overview: Localized<string>;
  learningObjectives: Localized<string[]>;
  keywords: string[];
  sections: ChapterSection[];
  examFocus: Localized<string[]>;
  recap: Localized<string[]>;
};

export type ResolvedChapter = {
  slug: string;
  number: number;
  studyMinutes: number;
  title: string;
  overview: string;
  learningObjectives: string[];
  keywords: string[];
  sections: {
    id: string;
    title: string;
    summary: string;
    bullets: string[];
  }[];
  examFocus: string[];
  recap: string[];
};

export type HubCopy = {
  badge: string;
  title: string;
  description: string;
  chaptersTitle: string;
  totalTime: string;
  indexSectionsTitle: string;
  indexSections: string[];
  howToUseTitle: string;
  howToUse: string[];
  extraSectionsTitle: string;
  extraSections: {
    title: string;
    description: string;
  }[];
  metaTitle: string;
};

export type UiLabels = {
  knowledgeHome: string;
  istqbHub: string;
  chapter: string;
  studyTime: string;
  minutes: string;
  onThisPage: string;
  learningObjectives: string;
  examFocus: string;
  quickSummary: string;
  backToHub: string;
  nextChapter: string;
  previousChapter: string;
};

const l = <T>(vi: T, en: T, kr?: T): Localized<T> => ({
  vi,
  en,
  kr,
});

export const resolveKnowledgeLocale = (locale: string): KnowledgeLocale => {
  if (locale === 'vi' || locale === 'en' || locale === 'kr') return locale;
  return 'en';
};

const pick = <T>(value: Localized<T>, locale: KnowledgeLocale): T => {
  if (locale === 'vi') return value.vi;
  if (locale === 'kr' && value.kr !== undefined) return value.kr;
  return value.en;
};

const UI_LABELS: Record<KnowledgeLocale, UiLabels> = {
  vi: {
    knowledgeHome: 'Tổng hợp kiến thức',
    istqbHub: 'ISTQB Foundation Level',
    chapter: 'Chương',
    studyTime: 'Thời lượng',
    minutes: 'phút',
    onThisPage: 'Mục lục trong trang',
    learningObjectives: 'Learning Objectives',
    examFocus: 'Trọng tâm khi học / thi',
    quickSummary: 'Tóm tắt nhanh',
    backToHub: 'Quay lại trang ISTQB',
    nextChapter: 'Chương tiếp theo',
    previousChapter: 'Chương trước',
  },
  en: {
    knowledgeHome: 'Knowledge Summary',
    istqbHub: 'ISTQB Foundation Level',
    chapter: 'Chapter',
    studyTime: 'Study time',
    minutes: 'minutes',
    onThisPage: 'On this page',
    learningObjectives: 'Learning Objectives',
    examFocus: 'Exam focus',
    quickSummary: 'Quick summary',
    backToHub: 'Back to ISTQB hub',
    nextChapter: 'Next chapter',
    previousChapter: 'Previous chapter',
  },
  kr: {
    knowledgeHome: '지식 모음',
    istqbHub: 'ISTQB Foundation Level',
    chapter: '챕터',
    studyTime: '학습 시간',
    minutes: '분',
    onThisPage: '페이지 목차',
    learningObjectives: '학습 목표',
    examFocus: '시험 포인트',
    quickSummary: '핵심 요약',
    backToHub: 'ISTQB 허브로 돌아가기',
    nextChapter: '다음 챕터',
    previousChapter: '이전 챕터',
  },
};

const HUB_COPY: Record<KnowledgeLocale, HubCopy> = {
  vi: {
    badge: 'ISTQB CTFL v4.0.1',
    title: 'ISTQB Foundation Level',
    description:
      'Đây là khu vực tổng hợp toàn bộ nội dung học ISTQB Foundation Level trên website của mình. Mỗi chapter được tách thành một page riêng để dễ đọc, dễ ôn tập và tiện mở rộng thêm ví dụ thực tế, ghi chú cá nhân, câu hỏi hay nhầm và mindmap sau này.',
    chaptersTitle: '6 chapter examinable',
    totalTime: 'Tổng thời lượng tối thiểu: 1135 phút',
    indexSectionsTitle: 'Trang này dùng để làm gì?',
    indexSections: [
      'Giữ phần Introduction và các mục không thi thành một điểm bắt đầu chung.',
      'Liệt kê toàn bộ 6 chapter có nội dung examinable của syllabus.',
      'Làm hub để đi sang từng chapter page riêng.',
    ],
    howToUseTitle: 'Cách sử dụng',
    howToUse: [
      'Bấm vào từng chapter để xem nội dung tóm tắt theo bố cục học tập.',
      'Ở mỗi chapter sẽ có learning objectives, sections, exam focus và quick summary.',
      'Phần nội dung được viết theo hướng học tập cá nhân, không chép nguyên văn syllabus.',
    ],
    extraSectionsTitle: 'Các mục giữ lại trên trang hub',
    extraSections: [
      {
        title: '0. Introduction',
        description: 'Mục mở đầu của syllabus, giải thích mục đích, cấu trúc và cách tổ chức nội dung.',
      },
      {
        title: '7–11. References / Appendices / Index',
        description: 'Các phần tham khảo, ma trận learning objectives và release notes.',
      },
    ],
    metaTitle: 'ISTQB Foundation Level',
  },
  en: {
    badge: 'ISTQB CTFL v4.0.1',
    title: 'ISTQB Foundation Level',
    description:
      'This hub collects the ISTQB Foundation Level content on your website. Each examinable chapter is split into its own page so that you can extend it later with examples, personal notes, common mistakes, and revision summaries.',
    chaptersTitle: '6 examinable chapters',
    totalTime: 'Minimum study time: 1135 minutes',
    indexSectionsTitle: 'What this page is for',
    indexSections: [
      'Keep the Introduction and non-exam sections in one starting point.',
      'List all six examinable chapters from the syllabus.',
      'Act as the hub that leads to each chapter page.',
    ],
    howToUseTitle: 'How to use it',
    howToUse: [
      'Open each chapter card to read the structured summary.',
      'Each chapter page has learning objectives, sections, exam focus, and quick summary.',
      'The content is written as study notes, not as a verbatim copy of the syllabus.',
    ],
    extraSectionsTitle: 'Sections kept on the hub page',
    extraSections: [
      {
        title: '0. Introduction',
        description: 'The opening section of the syllabus, explaining purpose, scope, and organization.',
      },
      {
        title: '7–11. References / Appendices / Index',
        description: 'Reference material, traceability information, and release notes.',
      },
    ],
    metaTitle: 'ISTQB Foundation Level',
  },
  kr: {
    badge: 'ISTQB CTFL v4.0.1',
    title: 'ISTQB Foundation Level',
    description:
      'This hub collects the ISTQB Foundation Level content on your website. Each examinable chapter is split into its own page so that you can extend it later with examples, personal notes, common mistakes, and revision summaries.',
    chaptersTitle: '6 examinable chapters',
    totalTime: 'Minimum study time: 1135 minutes',
    indexSectionsTitle: 'What this page is for',
    indexSections: [
      'Keep the Introduction and non-exam sections in one starting point.',
      'List all six examinable chapters from the syllabus.',
      'Act as the hub that leads to each chapter page.',
    ],
    howToUseTitle: 'How to use it',
    howToUse: [
      'Open each chapter card to read the structured summary.',
      'Each chapter page has learning objectives, sections, exam focus, and quick summary.',
      'The content is written as study notes, not as a verbatim copy of the syllabus.',
    ],
    extraSectionsTitle: 'Sections kept on the hub page',
    extraSections: [
      {
        title: '0. Introduction',
        description: 'The opening section of the syllabus, explaining purpose, scope, and organization.',
      },
      {
        title: '7–11. References / Appendices / Index',
        description: 'Reference material, traceability information, and release notes.',
      },
    ],
    metaTitle: 'ISTQB Foundation Level',
  },
};

export const ISTQB_CHAPTERS: Chapter[] = [
  {
    slug: 'chapter-1-fundamentals-of-testing',
    number: 1,
    studyMinutes: 180,
    title: l('Kiến thức nền tảng về kiểm thử', 'Fundamentals of Testing'),
    overview: l(
      'Chương này đặt nền móng cho toàn bộ syllabus: kiểm thử là gì, vì sao cần kiểm thử, bảy nguyên tắc kiểm thử, test activities, testware và các vai trò trong testing.',
      'This chapter builds the foundation for the whole syllabus: what testing is, why it matters, the seven testing principles, core test activities, testware, and testing roles.'
    ),
    learningObjectives: l(
      [
        'Nêu được các mục tiêu điển hình của kiểm thử.',
        'Phân biệt testing với debugging.',
        'Phân biệt root cause, error, defect và failure.',
        'Giải thích bảy nguyên tắc kiểm thử.',
        'Giải thích test activities, traceability và vai trò trong testing.',
      ],
      [
        'Identify typical test objectives.',
        'Differentiate testing from debugging.',
        'Distinguish root cause, error, defect, and failure.',
        'Explain the seven testing principles.',
        'Explain test activities, traceability, and roles in testing.',
      ]
    ),
    keywords: [
      'coverage',
      'debugging',
      'defect',
      'error',
      'failure',
      'quality assurance',
      'test process',
      'testware',
      'traceability',
      'validation',
      'verification',
    ],
    sections: [
      {
        id: '1-1',
        title: l('1.1 Kiểm thử là gì?', '1.1 What is Testing?'),
        summary: l(
          'Kiểm thử không chỉ là chạy test; đó là tập hợp các hoạt động giúp phát hiện defect và đánh giá chất lượng của test object.',
          'Testing is not only test execution; it is a set of activities used to discover defects and evaluate the quality of a test object.'
        ),
        bullets: l(
          [
            'Kiểm thử bao gồm verification và validation.',
            'Dynamic testing cần chạy phần mềm; static testing thì không.',
            'Kiểm thử là hoạt động kỹ thuật nhưng cũng là hoạt động quản lý rủi ro.',
          ],
          [
            'Testing covers both verification and validation.',
            'Dynamic testing executes software, while static testing does not.',
            'Testing is both a technical activity and a risk-reduction activity.',
          ]
        ),
      },
      {
        id: '1-2',
        title: l('1.2 Tại sao kiểm thử lại cần thiết?', '1.2 Why is Testing Necessary?'),
        summary: l(
          'Phần này giải thích giá trị của kiểm thử đối với chất lượng, uy tín, chi phí và khả năng giảm rủi ro khi phần mềm đi vào vận hành.',
          'This section explains how testing contributes to quality, reputation, cost control, and risk reduction once software goes live.'
        ),
        bullets: l(
          [
            'Kiểm thử giúp phát hiện vấn đề sớm để giảm chi phí sửa lỗi.',
            'QA và testing liên quan chặt chẽ nhưng không phải là một.',
            'Cần nhớ chuỗi: root cause → error → defect → failure.',
          ],
          [
            'Testing helps detect issues early and lower fix costs.',
            'Testing and QA are related but not identical concepts.',
            'Remember the chain: root cause → error → defect → failure.',
          ]
        ),
      },
      {
        id: '1-3',
        title: l('1.3 Bảy nguyên tắc kiểm thử', '1.3 Seven Testing Principles'),
        summary: l(
          'Đây là nhóm khái niệm lý thuyết rất hay gặp trong đề thi, đặc biệt ở dạng giải thích hoặc nhận diện ví dụ.',
          'This is a core theory section and often appears in exam questions, especially as examples or principle-matching items.'
        ),
        bullets: l(
          [
            'Testing shows presence of defects, not absence.',
            'Exhaustive testing là không thể.',
            'Defects cluster together; pesticide paradox; testing phụ thuộc ngữ cảnh; absence-of-errors fallacy.',
          ],
          [
            'Testing shows the presence of defects, not their absence.',
            'Exhaustive testing is impossible.',
            'Remember defect clustering, pesticide paradox, context dependency, and the absence-of-errors fallacy.',
          ]
        ),
      },
      {
        id: '1-4',
        title: l('1.4 Test activities, testware và roles', '1.4 Test Activities, Testware and Roles'),
        summary: l(
          'Phần này nối lý thuyết với quy trình thực tế: từ planning, analysis, design đến implementation, execution, monitoring/control và completion.',
          'This section connects theory to the real process: from planning, analysis, and design to implementation, execution, monitoring/control, and completion.'
        ),
        bullets: l(
          [
            'Mỗi activity tạo ra testware khác nhau.',
            'Traceability giúp theo dõi từ requirement đến test cases và defects.',
            'Cần phân biệt rõ test management role và testing role.',
          ],
          [
            'Each activity produces different testware.',
            'Traceability links requirements, test cases, and defects.',
            'Distinguish test management roles from testing roles.',
          ]
        ),
      },
      {
        id: '1-5',
        title: l('1.5 Kỹ năng và good practices', '1.5 Essential Skills and Good Practices'),
        summary: l(
          'Tester cần kỹ năng phân tích, giao tiếp, tư duy phản biện và khả năng làm việc với các bên liên quan, không chỉ kỹ thuật thuần túy.',
          'A tester needs analysis, communication, and critical thinking skills, not only technical execution skills.'
        ),
        bullets: l(
          [
            'Whole team approach giúp testing diễn ra sớm và hiệu quả hơn.',
            'Tính độc lập có lợi nhưng cũng có trade-off.',
            'Giao tiếp rõ ràng là một phần của chất lượng kiểm thử.',
          ],
          [
            'A whole-team approach enables earlier and more effective testing.',
            'Independence brings benefits, but it also has trade-offs.',
            'Clear communication is part of testing quality.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Hay hỏi sự khác nhau giữa testing và debugging.',
        'Bảy nguyên tắc kiểm thử là phần rất dễ ra câu hỏi lý thuyết.',
        'Cần nhớ đúng chuỗi root cause, error, defect, failure.',
      ],
      [
        'Questions often compare testing and debugging.',
        'The seven testing principles are frequent theory topics.',
        'Memorize the root cause, error, defect, failure chain clearly.',
      ]
    ),
    recap: l(
      [
        'Kiểm thử là một chuỗi hoạt động, không chỉ là execution.',
        'Testing vừa hỗ trợ chất lượng vừa giảm rủi ro.',
        'Testware và traceability là nền tảng của kiểm thử có tổ chức.',
        'Kỹ năng con người là một phần rất quan trọng của nghề tester.',
      ],
      [
        'Testing is a chain of activities, not just execution.',
        'Testing supports quality and reduces risk.',
        'Testware and traceability are core to structured testing.',
        'People skills are a major part of the tester role.',
      ]
    ),
  },
  {
    slug: 'chapter-2-testing-throughout-the-sdlc',
    number: 2,
    studyMinutes: 130,
    title: l(
      'Kiểm thử trong vòng đời phát triển phần mềm',
      'Testing Throughout the Software Development Lifecycle'
    ),
    overview: l(
      'Chương này cho thấy kiểm thử thay đổi như thế nào tùy theo development approach, test levels, test types và maintenance testing.',
      'This chapter explains how testing changes across development approaches, test levels, test types, and maintenance testing.'
    ),
    learningObjectives: l(
      [
        'Hiểu ảnh hưởng của các SDLC khác nhau lên kiểm thử.',
        'Nắm được test-first approaches, DevOps và shift left.',
        'Phân biệt các test levels và test types.',
        'Phân biệt confirmation testing và regression testing.',
        'Tóm tắt maintenance testing và các trigger phổ biến.',
      ],
      [
        'Understand the impact of different SDLCs on testing.',
        'Explain test-first approaches, DevOps, and shift left.',
        'Differentiate test levels and test types.',
        'Distinguish confirmation testing from regression testing.',
        'Summarize maintenance testing and common triggers.',
      ]
    ),
    keywords: [
      'acceptance testing',
      'component testing',
      'integration testing',
      'system testing',
      'confirmation testing',
      'regression testing',
      'maintenance testing',
      'shift left',
      'DevOps',
    ],
    sections: [
      {
        id: '2-1',
        title: l('2.1 Kiểm thử trong bối cảnh SDLC', '2.1 Testing in the Context of an SDLC'),
        summary: l(
          'Không có một quy trình testing cố định cho mọi dự án; testing phải phù hợp với cách sản phẩm được phát triển.',
          'There is no single testing process for all projects; testing must fit the way the product is developed.'
        ),
        bullets: l(
          [
            'Sequential models cần test planning sớm nhưng execution muộn hơn.',
            'Iterative / incremental / agile yêu cầu phản hồi nhanh và test lặp lại.',
            'Good testing practices vẫn cần được giữ bất kể SDLC nào.',
          ],
          [
            'Sequential models plan early and execute later.',
            'Iterative, incremental, and agile models rely on fast and repeated feedback.',
            'Good testing practices still apply regardless of the SDLC.',
          ]
        ),
      },
      {
        id: '2-2',
        title: l('2.2 Test-first, DevOps và Shift Left', '2.2 Test-first, DevOps and Shift Left'),
        summary: l(
          'Chương này nhấn mạnh việc đưa testing vào sớm hơn trong vòng đời và phối hợp tốt hơn giữa development, testing và operations.',
          'This section emphasizes moving testing earlier in the lifecycle and improving collaboration between development, testing, and operations.'
        ),
        bullets: l(
          [
            'Test-first approaches giúp làm rõ yêu cầu trước khi code.',
            'DevOps tăng tốc delivery nhưng cũng đòi hỏi testing thích nghi.',
            'Shift left không chỉ là test sớm hơn mà còn là feedback sớm hơn.',
          ],
          [
            'Test-first approaches clarify expectations before coding.',
            'DevOps speeds delivery but also demands adaptive testing.',
            'Shift left means earlier feedback, not only earlier execution.',
          ]
        ),
      },
      {
        id: '2-3',
        title: l('2.3 Test levels', '2.3 Test Levels'),
        summary: l(
          'Mỗi test level có objective, scope, environment và người chịu trách nhiệm khác nhau.',
          'Each test level has different objectives, scope, environments, and responsibilities.'
        ),
        bullets: l(
          [
            'Các mức thường gặp: component, component integration, system, system integration, acceptance.',
            'Mỗi level trả lời một loại rủi ro khác nhau.',
            'Entry/exit criteria thay đổi theo từng level.',
          ],
          [
            'Common levels are component, component integration, system, system integration, and acceptance.',
            'Each level targets a different type of risk.',
            'Entry and exit criteria vary by level.',
          ]
        ),
      },
      {
        id: '2-4',
        title: l('2.4 Test types và maintenance testing', '2.4 Test Types and Maintenance Testing'),
        summary: l(
          'Test type tập trung vào một đặc tính hoặc góc nhìn của hệ thống; maintenance testing xuất hiện khi hệ thống thay đổi sau release.',
          'A test type focuses on a specific attribute or perspective of the system; maintenance testing happens after changes in released software.'
        ),
        bullets: l(
          [
            'Functional, non-functional, structural và change-related là các nhóm chính.',
            'Confirmation testing xác nhận fix hoạt động.',
            'Regression testing kiểm tra xem thay đổi có làm hỏng phần cũ hay không.',
          ],
          [
            'Functional, non-functional, structural, and change-related testing are the main groups.',
            'Confirmation testing checks whether a fix works.',
            'Regression testing checks whether changes broke existing behavior.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Rất hay hỏi confirmation testing khác gì regression testing.',
        'Các test levels thường xuất hiện ở dạng matching hoặc scenario.',
        'Shift left và DevOps hay được hỏi ở mức khái niệm.',
      ],
      [
        'Confirmation versus regression testing is a frequent exam topic.',
        'Test levels often appear as matching or scenario questions.',
        'Shift left and DevOps are usually tested conceptually.',
      ]
    ),
    recap: l(
      [
        'Testing phải phù hợp với development approach.',
        'Test-first, DevOps và shift left đều đẩy feedback về sớm hơn.',
        'Test level khác test type.',
        'Maintenance testing xuất hiện khi hệ thống thay đổi sau release.',
      ],
      [
        'Testing must fit the development approach.',
        'Test-first, DevOps, and shift left all move feedback earlier.',
        'Test levels are different from test types.',
        'Maintenance testing occurs after changes to released software.',
      ]
    ),
  },
  {
    slug: 'chapter-3-static-testing',
    number: 3,
    studyMinutes: 80,
    title: l('Kiểm thử tĩnh', 'Static Testing'),
    overview: l(
      'Chương này tập trung vào static testing, giá trị của review, sự khác nhau với dynamic testing và các loại review phổ biến.',
      'This chapter focuses on static testing, the value of reviews, how it differs from dynamic testing, and common review types.'
    ),
    learningObjectives: l(
      [
        'Nhận diện các work products có thể kiểm tra bằng static testing.',
        'Giải thích giá trị của static testing.',
        'So sánh static testing với dynamic testing.',
        'Tóm tắt review process và trách nhiệm của các vai trò.',
        'Phân biệt các review types và success factors.',
      ],
      [
        'Recognize work products that can be examined by static testing.',
        'Explain the value of static testing.',
        'Compare static testing and dynamic testing.',
        'Summarize the review process and role responsibilities.',
        'Differentiate review types and success factors.',
      ]
    ),
    keywords: [
      'static testing',
      'dynamic testing',
      'review',
      'inspection',
      'technical review',
      'walkthrough',
      'feedback',
      'anomaly',
    ],
    sections: [
      {
        id: '3-1',
        title: l('3.1 Static testing basics', '3.1 Static Testing Basics'),
        summary: l(
          'Static testing đánh giá work products mà không cần chạy phần mềm; nó có thể áp dụng cho requirement, design, test cases, code, tài liệu.',
          'Static testing evaluates work products without executing software; it can be applied to requirements, designs, test cases, code, and documents.'
        ),
        bullets: l(
          [
            'Static testing phát hiện defect sớm hơn nhiều so với dynamic testing.',
            'Nó đặc biệt hữu ích với tài liệu và source code.',
            'Kết quả thường là comment, issue hoặc action item để sửa.',
          ],
          [
            'Static testing often finds defects earlier than dynamic testing.',
            'It is particularly useful for documents and source code.',
            'Results are typically comments, issues, or actions for correction.',
          ]
        ),
      },
      {
        id: '3-2',
        title: l('3.2 Static vs Dynamic', '3.2 Static vs Dynamic'),
        summary: l(
          'Hai cách tiếp cận này bổ trợ nhau: static testing giỏi phát hiện defect trong work product, còn dynamic testing cho thấy failure khi chạy.',
          'These approaches complement each other: static testing finds defects in work products, while dynamic testing reveals failures during execution.'
        ),
        bullets: l(
          [
            'Static testing không yêu cầu executable software.',
            'Dynamic testing cần test cases, environment và execution.',
            'Một dự án mạnh về quality thường dùng cả hai.',
          ],
          [
            'Static testing does not require executable software.',
            'Dynamic testing needs test cases, environments, and execution.',
            'Strong quality practices usually combine both.',
          ]
        ),
      },
      {
        id: '3-3',
        title: l('3.3 Review process', '3.3 Review Process'),
        summary: l(
          'Review process thường gồm planning, initiation, individual review, communication/analysis, fixing/reporting.',
          'The review process usually covers planning, initiation, individual review, communication/analysis, and fixing/reporting.'
        ),
        bullets: l(
          [
            'Feedback sớm giúp giảm misunderstanding và rework.',
            'Moderator, author, reviewer, scribe có trách nhiệm khác nhau.',
            'Review tốt phụ thuộc vào mục tiêu rõ ràng và chuẩn bị đầy đủ.',
          ],
          [
            'Early feedback reduces misunderstandings and rework.',
            'Moderator, author, reviewer, and scribe have different responsibilities.',
            'Good reviews depend on clear objectives and solid preparation.',
          ]
        ),
      },
      {
        id: '3-4',
        title: l('3.4 Review types và success factors', '3.4 Review Types and Success Factors'),
        summary: l(
          'Informal review, walkthrough, technical review và inspection có mức độ chặt chẽ khác nhau.',
          'Informal reviews, walkthroughs, technical reviews, and inspections vary in formality and rigor.'
        ),
        bullets: l(
          [
            'Inspection là loại review formal nhất.',
            'Không phải review nào cũng nhằm tìm defect; có review nhằm chia sẻ hiểu biết.',
            'Success factors gồm scope phù hợp, tài liệu rõ ràng và môi trường review tích cực.',
          ],
          [
            'Inspections are the most formal review type.',
            'Not every review is only for finding defects; some also share understanding.',
            'Success factors include good scope, clear work products, and a constructive review culture.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Hay hỏi static testing khác dynamic testing ở điểm nào.',
        'Cần nhớ được 4 review types và mức độ formal của chúng.',
        'Review process activities dễ xuất hiện ở dạng thứ tự hoặc matching.',
      ],
      [
        'Expect questions comparing static and dynamic testing.',
        'Be able to distinguish the four review types and their formality.',
        'Review process activities may appear as sequencing or matching questions.',
      ]
    ),
    recap: l(
      [
        'Static testing không cần chạy phần mềm.',
        'Review là công cụ feedback sớm rất hiệu quả.',
        'Static và dynamic testing bổ trợ cho nhau.',
        'Review tốt phụ thuộc nhiều vào con người và cách tổ chức.',
      ],
      [
        'Static testing does not execute software.',
        'Reviews are powerful early-feedback mechanisms.',
        'Static and dynamic testing complement each other.',
        'Successful reviews depend heavily on people and organization.',
      ]
    ),
  },
  {
    slug: 'chapter-4-test-analysis-and-design',
    number: 4,
    studyMinutes: 390,
    title: l('Phân tích và thiết kế kiểm thử', 'Test Analysis and Design'),
    overview: l(
      'Đây là chương nặng nhất của syllabus, tập trung vào test techniques: black-box, white-box, experience-based và collaboration-based approaches.',
      'This is the heaviest chapter in the syllabus, focusing on test techniques: black-box, white-box, experience-based, and collaboration-based approaches.'
    ),
    learningObjectives: l(
      [
        'Phân biệt black-box, white-box và experience-based techniques.',
        'Áp dụng equivalence partitioning, BVA, decision table, state transition.',
        'Giải thích statement testing và branch testing.',
        'Giải thích error guessing, exploratory testing, checklist-based testing.',
        'Hiểu user stories, acceptance criteria và ATDD.',
      ],
      [
        'Distinguish black-box, white-box, and experience-based techniques.',
        'Apply equivalence partitioning, BVA, decision table, and state transition testing.',
        'Explain statement testing and branch testing.',
        'Explain error guessing, exploratory testing, and checklist-based testing.',
        'Understand user stories, acceptance criteria, and ATDD.',
      ]
    ),
    keywords: [
      'equivalence partitioning',
      'boundary value analysis',
      'decision table',
      'state transition',
      'statement coverage',
      'branch coverage',
      'error guessing',
      'exploratory testing',
      'ATDD',
    ],
    sections: [
      {
        id: '4-1',
        title: l('4.1 Tổng quan kỹ thuật kiểm thử', '4.1 Test Techniques Overview'),
        summary: l(
          'Trước khi đi vào từng kỹ thuật, cần hiểu chúng khác nhau ở dữ liệu đầu vào dùng để thiết kế test cases.',
          'Before applying specific techniques, you need to understand how they differ by the source of information used to design test cases.'
        ),
        bullets: l(
          [
            'Black-box dựa trên specification và expected behavior.',
            'White-box dựa trên structure hoặc internal logic.',
            'Experience-based dựa vào kiến thức, trực giác và lịch sử lỗi.',
          ],
          [
            'Black-box techniques use specifications and expected behavior.',
            'White-box techniques use internal structure or logic.',
            'Experience-based techniques rely on knowledge, intuition, and defect history.',
          ]
        ),
      },
      {
        id: '4-2',
        title: l('4.2 Kỹ thuật hộp đen', '4.2 Black-Box Test Techniques'),
        summary: l(
          'Đây là nhóm kỹ thuật rất hay gặp trong đề thi vì gắn trực tiếp với cách tạo test cases từ yêu cầu.',
          'This group is heavily tested because it directly supports deriving test cases from specifications.'
        ),
        bullets: l(
          [
            'Equivalence partitioning nhóm dữ liệu thành các partition hợp lệ/không hợp lệ.',
            'Boundary value analysis tập trung vào điểm biên.',
            'Decision table và state transition phù hợp với rule-based hoặc stateful behavior.',
          ],
          [
            'Equivalence partitioning groups data into valid and invalid partitions.',
            'Boundary value analysis targets the edges of those partitions.',
            'Decision tables and state transitions are useful for rule-based or stateful behavior.',
          ]
        ),
      },
      {
        id: '4-3',
        title: l('4.3 Kỹ thuật hộp trắng', '4.3 White-Box Test Techniques'),
        summary: l(
          'Phần này kiểm thử từ góc nhìn cấu trúc bên trong, tập trung vào statement coverage và branch coverage.',
          'This section tests from the internal structural perspective, focusing on statement and branch coverage.'
        ),
        bullets: l(
          [
            'Statement coverage cho biết câu lệnh nào đã được chạy.',
            'Branch coverage đi sâu hơn, quan tâm đến các nhánh điều kiện.',
            'Coverage cao không đồng nghĩa không còn defect.',
          ],
          [
            'Statement coverage shows which statements were executed.',
            'Branch coverage goes deeper by considering decision branches.',
            'High coverage does not guarantee absence of defects.',
          ]
        ),
      },
      {
        id: '4-4',
        title: l('4.4 Kỹ thuật dựa trên kinh nghiệm', '4.4 Experience-Based Techniques'),
        summary: l(
          'Khi requirement chưa đủ rõ hoặc thời gian gấp, kinh nghiệm tester trở thành nguồn thông tin rất quan trọng để tìm defect.',
          'When requirements are incomplete or time is limited, tester experience becomes a valuable source for finding defects.'
        ),
        bullets: l(
          [
            'Error guessing dùng direct intuition và historical defect patterns.',
            'Exploratory testing kết hợp learning, design và execution trong cùng một thời điểm.',
            'Checklist-based testing giúp chuẩn hóa những gì cần rà soát.',
          ],
          [
            'Error guessing uses intuition and historical defect patterns.',
            'Exploratory testing combines learning, design, and execution at the same time.',
            'Checklist-based testing standardizes what should be checked.',
          ]
        ),
      },
      {
        id: '4-5',
        title: l('4.5 Cách tiếp cận dựa trên cộng tác', '4.5 Collaboration-Based Approaches'),
        summary: l(
          'Phần này nối testing với cách team làm việc: user stories, acceptance criteria và ATDD.',
          'This section links testing to team collaboration through user stories, acceptance criteria, and ATDD.'
        ),
        bullets: l(
          [
            'User stories cần được viết rõ vai trò, mục tiêu và giá trị.',
            'Acceptance criteria có thể viết theo nhiều dạng khác nhau.',
            'ATDD giúp thống nhất kỳ vọng trước khi development bắt đầu.',
          ],
          [
            'User stories should clearly express role, goal, and value.',
            'Acceptance criteria can be written in different forms.',
            'ATDD aligns expectations before development starts.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Chapter 4 là chương nặng nhất và dễ xuất hiện bài tập nhỏ.',
        'Cần luyện cách phân biệt khi nào dùng từng technique.',
        'BVA, decision table và state transition rất hay ra câu hỏi áp dụng.',
      ],
      [
        'Chapter 4 is the most heavily tested and often includes mini-scenarios.',
        'Practice deciding when each technique is appropriate.',
        'BVA, decision tables, and state transition testing frequently appear in application questions.',
      ]
    ),
    recap: l(
      [
        'Kỹ thuật kiểm thử khác nhau ở nguồn thông tin dùng để tạo test cases.',
        'Black-box tập trung vào behavior; white-box tập trung vào structure.',
        'Experience-based rất hữu ích khi thiếu thời gian hoặc thiếu tài liệu.',
        'Collaboration-based approaches giúp làm rõ kỳ vọng ngay từ đầu.',
      ],
      [
        'Techniques differ by the information used to derive tests.',
        'Black-box focuses on behavior; white-box focuses on structure.',
        'Experience-based techniques are useful when time or documentation is limited.',
        'Collaboration-based approaches help clarify expectations early.',
      ]
    ),
  },
  {
    slug: 'chapter-5-managing-the-test-activities',
    number: 5,
    studyMinutes: 335,
    title: l('Quản lý hoạt động kiểm thử', 'Managing the Test Activities'),
    overview: l(
      'Chương này nghiêng về quản lý và điều phối testing: lập kế hoạch, ước lượng, quản lý rủi ro, theo dõi trạng thái, báo cáo, cấu hình và defect management.',
      'This chapter focuses on managing and coordinating testing: planning, estimation, risk management, monitoring, reporting, configuration, and defect management.'
    ),
    learningObjectives: l(
      [
        'Hiểu mục đích và nội dung của test plan.',
        'Áp dụng estimation techniques và test case prioritization.',
        'Phân biệt project risk và product risk.',
        'Hiểu metrics, test reports và cách giao tiếp trạng thái kiểm thử.',
        'Chuẩn bị defect report rõ ràng và dễ hiểu.',
      ],
      [
        'Understand the purpose and content of a test plan.',
        'Apply estimation techniques and test case prioritization.',
        'Differentiate project risks from product risks.',
        'Understand metrics, test reports, and communication of test status.',
        'Prepare a clear and understandable defect report.',
      ]
    ),
    keywords: [
      'test plan',
      'entry criteria',
      'exit criteria',
      'estimation',
      'test pyramid',
      'testing quadrants',
      'risk management',
      'test report',
      'configuration management',
      'defect report',
    ],
    sections: [
      {
        id: '5-1',
        title: l('5.1 Test planning và estimation', '5.1 Test Planning and Estimation'),
        summary: l(
          'Kế hoạch kiểm thử phải làm rõ scope, objectives, approach, resources, schedule và tiêu chí đánh giá kết quả.',
          'Test planning should clarify scope, objectives, approach, resources, schedule, and completion criteria.'
        ),
        bullets: l(
          [
            'Entry criteria và exit criteria không giống nhau.',
            'Estimation có thể dựa trên analogy, expert judgement hoặc historical data.',
            'Tester cần đóng góp giá trị vào iteration và release planning.',
          ],
          [
            'Entry criteria and exit criteria are not the same.',
            'Estimation may use analogy, expert judgement, or historical data.',
            'Testers add value during iteration and release planning.',
          ]
        ),
      },
      {
        id: '5-2',
        title: l('5.2 Prioritization, test pyramid và quadrants', '5.2 Prioritization, Test Pyramid and Quadrants'),
        summary: l(
          'Không phải test case nào cũng quan trọng như nhau; ưu tiên cần bám theo risk, business value và coverage.',
          'Not all test cases are equally important; prioritization should reflect risk, business value, and coverage.'
        ),
        bullets: l(
          [
            'Test pyramid giúp cân đối mức tự động hóa theo loại test.',
            'Testing quadrants giúp nhìn testing từ nhiều góc độ.',
            'Ưu tiên tốt giúp dùng effort hiệu quả hơn.',
          ],
          [
            'The test pyramid helps balance automation across test levels.',
            'Testing quadrants provide a broader perspective on testing activities.',
            'Good prioritization improves effort usage.',
          ]
        ),
      },
      {
        id: '5-3',
        title: l('5.3 Risk management', '5.3 Risk Management'),
        summary: l(
          'Risk management giúp quyết định test scope và độ sâu kiểm thử dựa trên likelihood và impact.',
          'Risk management helps decide test scope and depth based on likelihood and impact.'
        ),
        bullets: l(
          [
            'Project risks ảnh hưởng đến việc thực hiện dự án.',
            'Product risks ảnh hưởng đến chất lượng hoặc vận hành của sản phẩm.',
            'Phân tích rủi ro giúp ưu tiên chỗ cần test kỹ hơn.',
          ],
          [
            'Project risks affect delivery of the project.',
            'Product risks affect product quality or operation.',
            'Risk analysis helps prioritize where testing should go deeper.',
          ]
        ),
      },
      {
        id: '5-4',
        title: l('5.4 Monitoring, reporting và communication', '5.4 Monitoring, Reporting and Communication'),
        summary: l(
          'Test monitoring và control cần metrics phù hợp, còn reporting phải rõ audience và purpose.',
          'Test monitoring and control require meaningful metrics, while reporting must fit the audience and purpose.'
        ),
        bullets: l(
          [
            'Metrics giúp thấy tiến độ, coverage, defect status và residual risk.',
            'Test report không chỉ để lưu, mà để giao tiếp trạng thái.',
            'Communication cần trung thực, đúng thời điểm và đúng người.',
          ],
          [
            'Metrics provide insight into progress, coverage, defect status, and residual risk.',
            'Test reports exist to communicate status, not only to document it.',
            'Communication should be honest, timely, and audience-aware.',
          ]
        ),
      },
      {
        id: '5-5',
        title: l('5.5 Configuration management và defect management', '5.5 Configuration and Defect Management'),
        summary: l(
          'Kiểm thử cần biết chính xác version nào đang được test, trong môi trường nào, với dữ liệu nào; defect report phải đủ rõ để người khác có thể reproduce và xử lý.',
          'Testing requires clarity about versions, environments, and data sets; defect reports must be clear enough for others to reproduce and act on them.'
        ),
        bullets: l(
          [
            'Configuration management hỗ trợ kiểm soát consistency của testware và test environment.',
            'Defect report nên có steps, expected result, actual result, severity và bằng chứng.',
            'Defect management tốt giúp team xử lý issue nhanh và rõ trách nhiệm.',
          ],
          [
            'Configuration management supports consistency of testware and environments.',
            'A defect report should include steps, expected result, actual result, severity, and evidence.',
            'Good defect management improves issue handling and ownership.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Cần nhớ rõ entry criteria vs exit criteria.',
        'Risk management rất dễ ra câu hỏi tình huống.',
        'Defect report và test report thường bị hỏi ở mức practical.',
      ],
      [
        'Be clear on entry criteria versus exit criteria.',
        'Risk management often appears in scenario-based questions.',
        'Defect reports and test reports are common practical topics.',
      ]
    ),
    recap: l(
      [
        'Testing cần được quản lý như một hoạt động có kế hoạch.',
        'Ước lượng, ưu tiên và risk management ảnh hưởng trực tiếp đến test scope.',
        'Metrics và reports chỉ có giá trị khi phục vụ quyết định và giao tiếp.',
        'Defect management là một phần quan trọng của chất lượng kiểm thử.',
      ],
      [
        'Testing must be managed as a planned activity.',
        'Estimation, prioritization, and risk management directly shape test scope.',
        'Metrics and reports matter only when they support decisions and communication.',
        'Defect management is a core part of testing quality.',
      ]
    ),
  },
  {
    slug: 'chapter-6-test-tools',
    number: 6,
    studyMinutes: 20,
    title: l('Công cụ kiểm thử', 'Test Tools'),
    overview: l(
      'Chương cuối cùng rất ngắn, tập trung vào việc phân loại tool support for testing và hiểu lợi ích, rủi ro của test automation.',
      'The final chapter is short and focuses on classifying tool support for testing and understanding the benefits and risks of test automation.'
    ),
    learningObjectives: l(
      [
        'Giải thích các loại công cụ hỗ trợ kiểm thử khác nhau.',
        'Nhớ được lợi ích và rủi ro của test automation.',
      ],
      [
        'Explain how different categories of tools support testing.',
        'Recall the benefits and risks of test automation.',
      ]
    ),
    keywords: ['test tools', 'test automation', 'tool support'],
    sections: [
      {
        id: '6-1',
        title: l('6.1 Tool support for testing', '6.1 Tool Support for Testing'),
        summary: l(
          'Công cụ có thể hỗ trợ rất nhiều loại hoạt động testing, nhưng không công cụ nào tự nó bảo đảm chất lượng.',
          'Tools can support many testing activities, but no tool alone guarantees quality.'
        ),
        bullets: l(
          [
            'Có tool cho management, design, execution, static analysis, performance, CI/CD và collaboration.',
            'Tool cần được chọn theo nhu cầu và context của team.',
            'Sai kỳ vọng về công cụ sẽ dẫn đến thất vọng khi áp dụng.',
          ],
          [
            'There are tools for management, design, execution, static analysis, performance, CI/CD, and collaboration.',
            'Tools should be selected based on team needs and context.',
            'Unrealistic expectations from tools often lead to failed adoption.',
          ]
        ),
      },
      {
        id: '6-2',
        title: l('6.2 Benefits and risks of test automation', '6.2 Benefits and Risks of Test Automation'),
        summary: l(
          'Automation có thể tăng tốc độ, độ lặp lại và coverage, nhưng cũng đi kèm chi phí bảo trì, false confidence và effort ban đầu.',
          'Automation can improve speed, repeatability, and coverage, but it also brings maintenance cost, false confidence, and upfront effort.'
        ),
        bullets: l(
          [
            'Automation hiệu quả nhất khi được áp dụng đúng chỗ.',
            'Không phải test nào cũng đáng để automate.',
            'Tooling phải đi cùng quy trình và kỹ năng con người.',
          ],
          [
            'Automation is most effective when applied in the right places.',
            'Not every test is worth automating.',
            'Tooling must be supported by process and people skills.',
          ]
        ),
      },
    ],
    examFocus: l(
      [
        'Hay hỏi tool categories hỗ trợ hoạt động nào.',
        'Lợi ích và rủi ro của automation thường ra ở mức nhớ và phân biệt.',
        'Cần tránh suy nghĩ “tool = quality”.',
      ],
      [
        'Expect questions about which activities different tool categories support.',
        'Benefits and risks of automation are common recall topics.',
        'Avoid the mindset that tools automatically guarantee quality.',
      ]
    ),
    recap: l(
      [
        'Tool là công cụ hỗ trợ, không thay thế tư duy kiểm thử.',
        'Automation có giá trị nhưng không phải lúc nào cũng là câu trả lời tốt nhất.',
        'Chọn tool phải bám theo context, rủi ro và mục tiêu của team.',
      ],
      [
        'Tools support testing; they do not replace testing thinking.',
        'Automation is valuable, but not always the best answer.',
        'Tool selection should follow context, risk, and team goals.',
      ]
    ),
  },
];

export const getUiLabels = (locale: string): UiLabels =>
  UI_LABELS[resolveKnowledgeLocale(locale)];

export const getHubCopy = (locale: string): HubCopy =>
  HUB_COPY[resolveKnowledgeLocale(locale)];

export const getChapterBySlug = (slug: string) =>
  ISTQB_CHAPTERS.find((chapter) => chapter.slug === slug);

export const resolveChapter = (
  chapter: Chapter,
  locale: string
): ResolvedChapter => {
  const currentLocale = resolveKnowledgeLocale(locale);

  return {
    slug: chapter.slug,
    number: chapter.number,
    studyMinutes: chapter.studyMinutes,
    title: pick(chapter.title, currentLocale),
    overview: pick(chapter.overview, currentLocale),
    learningObjectives: pick(chapter.learningObjectives, currentLocale),
    keywords: chapter.keywords,
    sections: chapter.sections.map((section) => ({
      id: section.id,
      title: pick(section.title, currentLocale),
      summary: pick(section.summary, currentLocale),
      bullets: pick(section.bullets, currentLocale),
    })),
    examFocus: pick(chapter.examFocus, currentLocale),
    recap: pick(chapter.recap, currentLocale),
  };
};