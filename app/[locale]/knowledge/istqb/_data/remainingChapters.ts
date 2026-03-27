type LocaleKey = 'vi' | 'en';

type LocalizedText = {
  vi: string;
  en: string;
};

type LocalizedList = {
  vi: string[];
  en: string[];
};

type VisualItem = {
  title: LocalizedText;
  text: LocalizedText;
};

type VisualGroup = {
  title: LocalizedText;
  items: VisualItem[];
};

type Section = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedList;
  bullets?: LocalizedList;
  visuals?: VisualGroup[];
  example?: {
    title: LocalizedText;
    text: LocalizedText;
  };
};

type Chapter = {
  slug: string;
  number: number;
  studyMinutes: number;
  title: LocalizedText;
  shortTitle: LocalizedText;
  intro: LocalizedText;
  introNote: LocalizedText;
  learningObjectives: LocalizedList;
  keywords: string[];
  sections: Section[];
  examFocus: LocalizedList;
  summary: LocalizedList;
};

type ResolvedChapter = {
  slug: string;
  number: number;
  studyMinutes: number;
  title: string;
  shortTitle: string;
  intro: string;
  introNote: string;
  learningObjectives: string[];
  keywords: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    visuals?: {
      title: string;
      items: {
        title: string;
        text: string;
      }[];
    }[];
    example?: {
      title: string;
      text: string;
    };
  }[];
  examFocus: string[];
  summary: string[];
  toc: { id: string; label: string }[];
};

export type ChapterUiLabels = {
  knowledgeHome: string;
  istqbHub: string;
  chapter: string;
  studyTime: string;
  minutes: string;
  onThisPage: string;
  learningObjectives: string;
  importantKeywords: string;
  examFocus: string;
  quickSummary: string;
  backToHub: string;
  nextChapter: string;
  previousChapter: string;
};

const lt = (vi: string, en: string): LocalizedText => ({ vi, en });
const ll = (vi: string[], en: string[]): LocalizedList => ({ vi, en });

const getLocale = (locale: string): LocaleKey => (locale === 'vi' ? 'vi' : 'en');
const text = (locale: LocaleKey, value: LocalizedText) => value[locale];
const list = (locale: LocaleKey, value: LocalizedList) => value[locale];

export const chapterUi: Record<LocaleKey, ChapterUiLabels> = {
  vi: {
    knowledgeHome: 'Tổng hợp kiến thức',
    istqbHub: 'ISTQB Foundation Level',
    chapter: 'Chương',
    studyTime: 'Thời lượng học tối thiểu',
    minutes: 'phút',
    onThisPage: 'Mục lục trong trang',
    learningObjectives: 'Learning Objectives',
    importantKeywords: 'Keywords quan trọng',
    examFocus: 'Trọng tâm khi ôn thi',
    quickSummary: 'Tóm tắt nhanh',
    backToHub: 'Quay lại trang ISTQB',
    nextChapter: 'Chương tiếp theo',
    previousChapter: 'Chương trước',
  },
  en: {
    knowledgeHome: 'Knowledge Summary',
    istqbHub: 'ISTQB Foundation Level',
    chapter: 'Chapter',
    studyTime: 'Minimum study time',
    minutes: 'minutes',
    onThisPage: 'On this page',
    learningObjectives: 'Learning Objectives',
    importantKeywords: 'Important keywords',
    examFocus: 'Exam focus',
    quickSummary: 'Quick summary',
    backToHub: 'Back to ISTQB hub',
    nextChapter: 'Next chapter',
    previousChapter: 'Previous chapter',
  },
};

export const REMAINING_ISTQB_CHAPTERS: Chapter[] = [
  {
    slug: 'chapter-2-testing-throughout-the-sdlc',
    number: 2,
    studyMinutes: 130,
    title: lt(
      'Chương 2 — Kiểm thử trong vòng đời phát triển phần mềm',
      'Chapter 2 — Testing Throughout the Software Development Lifecycle'
    ),
    shortTitle: lt(
      'Kiểm thử trong vòng đời phát triển phần mềm',
      'Testing Throughout the SDLC'
    ),
    intro: lt(
      'Chương 2 giúp bạn nối testing với cách sản phẩm được xây dựng trong thực tế. Nó trả lời những câu hỏi như: cùng là testing nhưng trong waterfall, iterative, agile hay DevOps thì khác nhau ở đâu? test levels là gì? test types là gì? confirmation testing và regression testing khác nhau thế nào? và maintenance testing xuất hiện khi nào?',
      'Chapter 2 connects testing to the way software is built in real projects. It answers questions such as: how testing differs across waterfall, iterative, agile, and DevOps contexts; what test levels and test types mean; how confirmation testing differs from regression testing; and when maintenance testing becomes relevant.'
    ),
    introNote: lt(
      'Đây là chương rất hay ra các câu hỏi dạng so sánh, matching hoặc tình huống nhỏ. Nếu học tốt chương này, bạn sẽ hiểu testing không tồn tại riêng lẻ mà luôn nằm trong một development context.',
      'This chapter often appears in comparison, matching, and scenario-style questions. If you understand it well, you start to see that testing never exists in isolation; it always lives inside a development context.'
    ),
    learningObjectives: ll(
      [
        'Hiểu ảnh hưởng của các SDLC khác nhau đối với testing.',
        'Phân biệt test-first approaches, DevOps và shift left.',
        'Giải thích test levels và objective của từng level.',
        'Giải thích test types và mối liên hệ với risk.',
        'Phân biệt confirmation testing với regression testing.',
        'Hiểu maintenance testing và các trigger điển hình.',
      ],
      [
        'Understand how different SDLCs influence testing.',
        'Differentiate test-first approaches, DevOps, and shift left.',
        'Explain test levels and the objective of each level.',
        'Explain test types and their relation to risk.',
        'Differentiate confirmation testing from regression testing.',
        'Understand maintenance testing and its common triggers.',
      ]
    ),
    keywords: [
      'SDLC',
      'DevOps',
      'shift left',
      'test level',
      'test type',
      'confirmation testing',
      'regression testing',
      'maintenance testing',
      'acceptance testing',
      'system testing',
    ],
    sections: [
      {
        id: 'sdlc-context',
        title: lt(
          '1. Testing trong bối cảnh SDLC',
          '1. Testing in the Context of the SDLC'
        ),
        paragraphs: ll(
          [
            'Testing không có một công thức cố định cho mọi dự án. Cách kiểm thử phụ thuộc rất nhiều vào việc team đang phát triển sản phẩm theo mô hình nào. Nếu làm theo sequential model như waterfall hoặc V-model, nhiều hoạt động test được lập kế hoạch từ sớm nhưng execution thường rõ ràng theo phase. Nếu làm iterative hoặc incremental, testing diễn ra lặp lại nhiều lần theo từng increment. Nếu làm agile, feedback cần nhanh hơn, test cần gần development hơn, và nhiều hoạt động test diễn ra song song với việc phát triển.',
            'Điều cần nhớ không phải là “mô hình nào tốt hơn”, mà là testing phải thích nghi với bối cảnh. Một tester giỏi không áp dụng máy móc cùng một cách test cho mọi loại sản phẩm. Họ quan sát development approach, release rhythm, mức độ ổn định của requirement, cấu trúc team, và từ đó điều chỉnh strategy cho phù hợp.',
          ],
          [
            'Testing does not follow one fixed formula for every project. The way testing is performed depends heavily on the development model. In sequential models such as waterfall or the V-model, many activities are planned early but execution is more phase-based. In iterative or incremental models, testing repeats across increments. In agile contexts, feedback must be faster, testing must stay closer to development, and many activities happen in parallel with implementation.',
            'The key lesson is not which model is better. The key lesson is that testing must adapt to context. A strong tester does not force the same testing style onto every product. Instead, they look at the development approach, release rhythm, requirement stability, team structure, and risk profile before deciding how testing should be organized.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Cùng là testing nhưng bối cảnh khác nhau',
              'Visual — Same testing, different delivery contexts'
            ),
            items: [
              {
                title: lt('Sequential / Waterfall', 'Sequential / Waterfall'),
                text: lt(
                  'Phù hợp với milestone rõ ràng, phase tách biệt, tài liệu đầy đủ hơn. Tester thường nhận đầu vào rõ ràng hơn nhưng feedback có thể đến muộn.',
                  'Works with clear milestones, separated phases, and heavier documentation. Testers often receive clearer inputs, but feedback may arrive later.'
                ),
              },
              {
                title: lt('Iterative / Incremental', 'Iterative / Incremental'),
                text: lt(
                  'Testing lặp lại theo từng increment. Cần giữ test regression tốt vì hệ thống thay đổi liên tục.',
                  'Testing repeats across increments. Regression thinking becomes important because the system changes continuously.'
                ),
              },
              {
                title: lt('Agile / Scrum', 'Agile / Scrum'),
                text: lt(
                  'Tester cần giao tiếp sát với dev, BA, PO. Nhiều test activity diễn ra ngay trong sprint và feedback phải nhanh.',
                  'Testers collaborate closely with developers, analysts, and product owners. Many activities happen inside the sprint and feedback must be rapid.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt(
            'Ví dụ thực tế',
            'Practical example'
          ),
          text: lt(
            'Một hệ thống ngân hàng core có release lớn 3 tháng một lần có thể phù hợp với quy trình test được planning khá chặt và nhiều vòng sign-off. Trong khi đó, một website thương mại điện tử release hằng tuần sẽ cần smoke test nhanh, regression hợp lý và nhiều collaboration trong sprint hơn.',
            'A core banking system with a major release every three months can fit a tightly planned test process with multiple sign-off steps. An e-commerce website releasing every week needs fast smoke testing, practical regression coverage, and stronger sprint-level collaboration.'
          ),
        },
      },
      {
        id: 'test-first-devops',
        title: lt(
          '2. Test-first approaches, DevOps và Shift Left',
          '2. Test-First Approaches, DevOps, and Shift Left'
        ),
        paragraphs: ll(
          [
            'Chương này muốn bạn hiểu rằng testing không chỉ xảy ra “sau khi code xong”. Trong nhiều cách làm hiện đại, testing được đẩy về sớm hơn. Test-first approaches như TDD, ATDD, hay BDD đều có điểm chung là dùng test hoặc acceptance examples để làm rõ kỳ vọng trước hoặc trong lúc development diễn ra.',
            'DevOps tiếp tục đẩy nhanh vòng phản hồi bằng cách rút ngắn khoảng cách giữa development và operations. Khi release diễn ra thường xuyên hơn, testing cũng phải thích nghi: nhiều automation hơn, feedback nhanh hơn, monitoring tốt hơn, và quality responsibility được chia sẻ rộng hơn. Shift left không chỉ đơn giản là “test sớm hơn”, mà là “đưa tư duy chất lượng và phản hồi về phía đầu pipeline”.',
          ],
          [
            'This part of the chapter is about understanding that testing does not only happen after coding is finished. In many modern approaches, testing is moved earlier. Test-first approaches such as TDD, ATDD, and BDD all use tests or acceptance examples to clarify expectations before or during development.',
            'DevOps accelerates the feedback loop even more by reducing the gap between development and operations. When releases happen more frequently, testing must adapt with more automation, faster feedback, stronger monitoring, and broader ownership of quality. Shift left is not only about testing earlier; it is about moving quality thinking and feedback toward the beginning of the delivery pipeline.',
          ]
        ),
        bullets: ll(
          [
            'TDD thường xoay quanh developer-level unit tests.',
            'ATDD dùng ví dụ chấp nhận để thống nhất kỳ vọng giữa business, dev và tester.',
            'BDD nhấn mạnh shared understanding bằng ngôn ngữ gần business hơn.',
            'DevOps không xoá testing; nó làm testing phải trở nên nhanh và phù hợp hơn với delivery flow.',
          ],
          [
            'TDD often centers on developer-level unit tests.',
            'ATDD uses acceptance examples to align business, development, and testing.',
            'BDD emphasizes shared understanding using language closer to business behavior.',
            'DevOps does not remove testing; it pushes testing to become faster and better aligned with delivery flow.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Dịch chuyển phản hồi sang bên trái',
              'Visual — Moving feedback to the left'
            ),
            items: [
              {
                title: lt('Muộn', 'Late'),
                text: lt(
                  'Chỉ test sau khi feature hoàn thành. Lúc đó defect đã “đi qua” nhiều bước và thường sửa tốn hơn.',
                  'Testing only after the feature is complete. Defects have already passed through several stages and are usually more expensive to fix.'
                ),
              },
              {
                title: lt('Sớm hơn', 'Earlier'),
                text: lt(
                  'Review requirement, review design, viết acceptance criteria rõ, chuẩn bị test sớm và trao đổi liên tục.',
                  'Review requirements, review design, write clear acceptance criteria, prepare tests early, and keep continuous communication.'
                ),
              },
              {
                title: lt('Liên tục', 'Continuous'),
                text: lt(
                  'Trong DevOps, feedback đến từ CI/CD, automated checks, monitoring và observability sau release.',
                  'In DevOps, feedback comes from CI/CD, automated checks, monitoring, and observability after release.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Nếu user story chỉ ghi “cho phép đổi mật khẩu”, một team shift-left tốt sẽ không đợi đến cuối sprint mới test. Họ sẽ hỏi sớm: cần re-login không? có check độ mạnh mật khẩu không? có gửi email xác nhận không? có invalid token case không? Chính việc hỏi sớm đó đã là một phần của testing.',
            'If a user story only says “allow password change”, a shift-left team will not wait until the end of the sprint to test it. They will ask early: should re-login be required, is password strength validated, is confirmation email sent, what happens with invalid tokens? That early questioning is already part of testing.'
          ),
        },
      },
      {
        id: 'test-levels',
        title: lt('3. Test Levels', '3. Test Levels'),
        paragraphs: ll(
          [
            'Test level là cách phân chia testing theo phạm vi và mục tiêu của đối tượng được test. Mỗi level trả lời một kiểu câu hỏi khác nhau. Component testing hỏi: “đơn vị nhỏ này có hoạt động đúng không?”. Integration testing hỏi: “các phần này có giao tiếp đúng không?”. System testing hỏi: “toàn hệ thống có làm việc đúng như mong đợi không?”. Acceptance testing hỏi: “sản phẩm có sẵn sàng và có giá trị cho user/business không?”.',
            'Điểm dễ nhầm là nhiều người hay trộn lẫn test level với test type. Test level là “đang test ở cấp nào”, còn test type là “đang tập trung vào đặc tính gì”. Ví dụ system level không có nghĩa là chỉ functional testing; bạn vẫn có thể làm performance, usability hoặc security ở system level.',
          ],
          [
            'A test level divides testing by scope and objective. Each level answers a different question. Component testing asks whether a small unit works correctly. Integration testing asks whether parts work together correctly. System testing asks whether the whole system behaves as expected. Acceptance testing asks whether the product is ready and valuable for users or the business.',
            'A common confusion is mixing up test levels with test types. A test level tells you at what scope you are testing. A test type tells you what quality aspect or perspective you are focusing on. System level does not mean only functional testing; you can still perform performance, usability, or security testing at the system level.',
          ]
        ),
        visuals: [
          {
            title: lt('Minh hoạ — Các mức kiểm thử', 'Visual — Typical test levels'),
            items: [
              {
                title: lt('Component', 'Component'),
                text: lt(
                  'Kiểm tra module nhỏ hoặc class/function riêng lẻ. Thường gần code nhất.',
                  'Checks a small unit such as a module, class, or function. Usually closest to the code.'
                ),
              },
              {
                title: lt('Integration', 'Integration'),
                text: lt(
                  'Tập trung vào giao tiếp giữa các thành phần, module hoặc hệ thống.',
                  'Focuses on interactions between components, modules, or systems.'
                ),
              },
              {
                title: lt('System / Acceptance', 'System / Acceptance'),
                text: lt(
                  'Nhìn toàn bộ sản phẩm và giá trị business. Đây là nơi trải nghiệm người dùng và flow end-to-end trở nên quan trọng.',
                  'Looks at the entire product and business value. This is where user experience and end-to-end flow become critical.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ hệ thống đặt hàng', 'Order system example'),
          text: lt(
            'Component level có thể test hàm tính phí ship. Integration level có thể test order service gọi payment service ra sao. System level có thể test cả flow đặt hàng từ giỏ hàng đến thanh toán. Acceptance level có thể kiểm tra xem khách hàng thực sự có thể mua hàng thành công và nhận email xác nhận như mong đợi không.',
            'At component level, you might test the shipping fee calculation function. At integration level, you might test how the order service calls the payment service. At system level, you could test the full flow from cart to payment. At acceptance level, you would check whether a real customer can actually complete the purchase and receive the expected confirmation email.'
          ),
        },
      },
      {
        id: 'test-types-maintenance',
        title: lt(
          '4. Test Types, Confirmation Testing, Regression Testing và Maintenance Testing',
          '4. Test Types, Confirmation Testing, Regression Testing, and Maintenance Testing'
        ),
        paragraphs: ll(
          [
            'Test type trả lời câu hỏi “ta đang đánh giá khía cạnh nào của hệ thống?”. Functional testing xem hệ thống làm đúng chức năng chưa. Non-functional testing xem các đặc tính như hiệu năng, khả năng sử dụng, bảo mật hay độ tin cậy. Còn confirmation testing và regression testing là hai loại change-related testing rất dễ bị nhầm.',
            'Confirmation testing xác minh rằng defect đã được fix thật sự. Regression testing kiểm tra xem việc sửa đó hoặc các thay đổi mới có vô tình làm hỏng phần đang chạy tốt trước đây hay không. Maintenance testing xuất hiện khi hệ thống đã được release và sau đó có thay đổi như hotfix, migration, upgrade, environment change hoặc retirement activity.',
          ],
          [
            'A test type answers the question “what aspect of the system are we evaluating?”. Functional testing checks whether the system does the right thing. Non-functional testing checks characteristics such as performance, usability, security, or reliability. Confirmation and regression testing are both change-related but are often confused.',
            'Confirmation testing verifies that a reported defect has really been fixed. Regression testing checks whether the fix or any related change unintentionally broke something that used to work. Maintenance testing appears when released software is changed through hot fixes, migrations, upgrades, environment changes, or retirement activities.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Confirmation vs Regression',
              'Visual — Confirmation vs Regression'
            ),
            items: [
              {
                title: lt('Confirmation Testing', 'Confirmation Testing'),
                text: lt(
                  'Test đúng case lỗi cũ để xác nhận fix đã hiệu quả. Tập trung vào chính vấn đề vừa được sửa.',
                  'Re-run the specific failing case to confirm that the fix works. Focuses on the exact defect that was corrected.'
                ),
              },
              {
                title: lt('Regression Testing', 'Regression Testing'),
                text: lt(
                  'Test thêm các khu vực liên quan để xem thay đổi mới có làm hỏng hành vi cũ không.',
                  'Test the surrounding or related areas to see whether the new change damaged previously working behavior.'
                ),
              },
              {
                title: lt('Maintenance Testing', 'Maintenance Testing'),
                text: lt(
                  'Xuất hiện sau release khi hệ thống có thay đổi: patch, migration, config change, infrastructure change…',
                  'Occurs after release when the system changes: patch, migration, configuration update, infrastructure change, and so on.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Một bug “không thể thêm sản phẩm vào giỏ hàng” đã được fix. Confirmation testing sẽ test lại đúng case thêm sản phẩm đó. Regression testing sẽ kiểm tra thêm tăng/giảm số lượng, xóa sản phẩm, tính tiền, áp mã giảm giá và checkout để đảm bảo fix không gây ảnh hưởng sang các flow liên quan.',
            'Suppose a defect “cannot add product to cart” has been fixed. Confirmation testing re-runs the exact add-to-cart case. Regression testing then checks quantity change, item removal, total calculation, coupon application, and checkout to ensure the fix did not damage related flows.'
          ),
        },
      },
    ],
    examFocus: ll(
      [
        'Phân biệt test level và test type.',
        'Nhớ chắc confirmation testing khác regression testing.',
        'Hiểu được shift left là thay đổi tư duy phản hồi, không chỉ là dời execution sang sớm.',
        'Biết maintenance testing xuất hiện khi hệ thống đã release rồi mới có thay đổi.',
      ],
      [
        'Differentiate test levels from test types.',
        'Know the difference between confirmation testing and regression testing.',
        'Understand that shift left is about earlier feedback, not only earlier execution.',
        'Remember that maintenance testing happens after released software changes.',
      ]
    ),
    summary: ll(
      [
        'Testing luôn phải phù hợp với development context.',
        'Test-first approaches, DevOps và shift left đều nhấn mạnh feedback sớm hơn.',
        'Test level và test type là hai khái niệm khác nhau.',
        'Confirmation testing xác nhận fix, regression testing kiểm tra ảnh hưởng phụ.',
        'Maintenance testing gắn với thay đổi sau khi phần mềm đã release.',
      ],
      [
        'Testing must always fit the development context.',
        'Test-first approaches, DevOps, and shift left all emphasize earlier feedback.',
        'Test levels and test types are different concepts.',
        'Confirmation testing validates the fix; regression testing checks side effects.',
        'Maintenance testing is tied to changes in released software.',
      ]
    ),
  },
  {
    slug: 'chapter-3-static-testing',
    number: 3,
    studyMinutes: 80,
    title: lt('Chương 3 — Kiểm thử tĩnh', 'Chapter 3 — Static Testing'),
    shortTitle: lt('Kiểm thử tĩnh', 'Static Testing'),
    intro: lt(
      'Chương 3 nói về static testing — tức là kiểm tra work products mà không cần chạy phần mềm. Đây là một trong những phần rất có giá trị trong thực tế vì nó giúp phát hiện vấn đề từ requirement, tài liệu, test case và code trước khi defect đi xa hơn.',
      'Chapter 3 is about static testing — examining work products without executing software. This is one of the most valuable practical areas because it helps detect problems in requirements, documents, test cases, and code before defects travel further downstream.'
    ),
    introNote: lt(
      'Nếu Chapter 1 cho bạn khái niệm nền tảng, thì Chapter 3 cho bạn một góc nhìn rất thực tế: nhiều lỗi quan trọng có thể được bắt ngay cả khi phần mềm chưa chạy.',
      'If Chapter 1 gave you the conceptual foundation, Chapter 3 gives you a very practical lesson: many important issues can be found even before software execution begins.'
    ),
    learningObjectives: ll(
      [
        'Hiểu static testing là gì và áp dụng được cho những work products nào.',
        'Giải thích được giá trị của static testing.',
        'So sánh static testing với dynamic testing.',
        'Hiểu review process và các vai trò trong review.',
        'Phân biệt informal review, walkthrough, technical review, inspection.',
      ],
      [
        'Understand what static testing is and which work products it applies to.',
        'Explain the value of static testing.',
        'Compare static testing with dynamic testing.',
        'Understand the review process and review roles.',
        'Differentiate informal review, walkthrough, technical review, and inspection.',
      ]
    ),
    keywords: [
      'static testing',
      'dynamic testing',
      'review',
      'inspection',
      'walkthrough',
      'technical review',
      'feedback',
      'anomaly',
      'static analysis',
    ],
    sections: [
      {
        id: 'static-basics',
        title: lt('1. Static testing basics', '1. Static Testing Basics'),
        paragraphs: ll(
          [
            'Static testing là kiểm tra các work products mà không cần thực thi phần mềm. Work product ở đây có thể là requirement, use case, user story, design, source code, test cases, test plan, manual, contract hoặc bất kỳ tài liệu nào tạo ra trong quá trình phát triển.',
            'Giá trị lớn nhất của static testing là khả năng phát hiện vấn đề sớm. Một requirement thiếu rõ ràng, một acceptance criterion mâu thuẫn, một flow thiết kế không hợp lý hoặc một test case viết sai expected result đều có thể được phát hiện trước khi đến giai đoạn execution. Điều này thường rẻ hơn và nhanh hơn so với chờ defect xuất hiện khi chạy hệ thống.',
          ],
          [
            'Static testing examines work products without executing the software. Those work products can include requirements, use cases, user stories, designs, source code, test cases, test plans, manuals, contracts, or many other development artifacts.',
            'The biggest value of static testing is early defect detection. An unclear requirement, a contradictory acceptance criterion, an unrealistic design flow, or an incorrect expected result in a test case can all be found before execution even starts. That is usually cheaper and faster than waiting for the defect to appear in running software.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Những thứ có thể được kiểm tra bằng static testing',
              'Visual — Work products that static testing can examine'
            ),
            items: [
              {
                title: lt('Requirement / User Story', 'Requirement / User Story'),
                text: lt(
                  'Tìm ambiguity, inconsistency, missing rule, missing acceptance criteria.',
                  'Look for ambiguity, inconsistency, missing rules, or missing acceptance criteria.'
                ),
              },
              {
                title: lt('Source Code', 'Source Code'),
                text: lt(
                  'Tìm logic đáng ngờ, naming khó hiểu, code smell, branch thiếu xử lý.',
                  'Look for suspicious logic, unclear naming, code smells, or missing branch handling.'
                ),
              },
              {
                title: lt('Test Cases / Test Plan', 'Test Cases / Test Plan'),
                text: lt(
                  'Tìm expected result sai, coverage thiếu, test case trùng lặp, dữ liệu chưa hợp lý.',
                  'Look for wrong expected results, missing coverage, duplicate cases, or weak test data.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Nếu requirement ghi “hệ thống gửi email khi đăng ký thành công” nhưng không nói rõ gửi ngay hay gửi sau xác minh OTP, team có thể review và phát hiện ambiguity này từ rất sớm, trước khi dev và tester hiểu theo hai cách khác nhau.',
            'If a requirement says “the system sends an email after successful registration” but does not clarify whether it should be sent immediately or only after OTP verification, a review can find this ambiguity early—before development and testing interpret it in different ways.'
          ),
        },
      },
      {
        id: 'static-vs-dynamic',
        title: lt(
          '2. Static testing vs Dynamic testing',
          '2. Static Testing vs Dynamic Testing'
        ),
        paragraphs: ll(
          [
            'Static và dynamic testing không đối lập nhau; chúng bổ trợ cho nhau. Static testing rất giỏi trong việc tìm defect nằm trong tài liệu hoặc cấu trúc work product. Dynamic testing lại mạnh ở việc cho thấy failure khi phần mềm được chạy thật với input, state và environment cụ thể.',
            'Một cách nhớ đơn giản: static testing giúp bạn hỏi “có gì đáng ngờ trong thứ đang được viết ra không?”, còn dynamic testing giúp bạn hỏi “khi hệ thống chạy, nó có thực sự hành xử đúng không?”.',
          ],
          [
            'Static and dynamic testing are not competing approaches; they complement each other. Static testing is very strong at finding defects inside work products and documentation. Dynamic testing is strong at revealing failures when the software actually executes under real inputs, states, and environments.',
            'A simple memory trick is this: static testing asks “is there anything suspicious in what we have written?”, while dynamic testing asks “when the system runs, does it actually behave correctly?”.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — So sánh nhanh',
              'Visual — Quick comparison'
            ),
            items: [
              {
                title: lt('Static Testing', 'Static Testing'),
                text: lt(
                  'Không chạy phần mềm; thường phát hiện defect sớm hơn; áp dụng tốt cho docs, code, testware.',
                  'Does not execute software; often finds defects earlier; works well on documents, code, and testware.'
                ),
              },
              {
                title: lt('Dynamic Testing', 'Dynamic Testing'),
                text: lt(
                  'Có chạy phần mềm; phù hợp để quan sát failure, actual result, environment behaviour.',
                  'Executes software; useful for observing failures, actual results, and environment behavior.'
                ),
              },
              {
                title: lt('Kết luận', 'Takeaway'),
                text: lt(
                  'Dự án tốt không chọn một trong hai — mà kết hợp cả hai đúng lúc.',
                  'Strong projects do not choose one over the other — they combine both at the right time.'
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'review-process',
        title: lt('3. Review process và roles', '3. Review Process and Roles'),
        paragraphs: ll(
          [
            'Review process thường được mô tả qua các bước: planning, initiation, individual review, communication and analysis, fixing and reporting. Không phải team nào cũng formal như nhau, nhưng tư duy cốt lõi vẫn giống nhau: có mục tiêu review, có work product cần đọc, có người tham gia, có feedback và có action sau review.',
            'Các vai trò thường gặp gồm author, reviewer, moderator, scribe, review leader hoặc manager tùy context. Điều quan trọng là hiểu ai chịu trách nhiệm tạo work product, ai điều phối buổi review, ai ghi nhận issue và ai theo dõi việc sửa.',
          ],
          [
            'The review process is commonly described through planning, initiation, individual review, communication and analysis, and fixing and reporting. Not every team formalizes these steps equally, but the core idea stays the same: there is a review goal, a work product to examine, participants, feedback, and actions after the review.',
            'Common roles include author, reviewer, moderator, scribe, review leader, or manager depending on context. What matters is understanding who created the work product, who facilitates the review, who records issues, and who follows up on corrective actions.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — 5 bước review process',
              'Visual — 5-step review process'
            ),
            items: [
              {
                title: lt('1. Planning', '1. Planning'),
                text: lt(
                  'Quyết định mục tiêu, scope, tài liệu, người tham gia và thời điểm review.',
                  'Decide the goal, scope, materials, participants, and review timing.'
                ),
              },
              {
                title: lt('2. Individual Review', '2. Individual Review'),
                text: lt(
                  'Mỗi reviewer tự đọc work product trước để phát hiện anomaly.',
                  'Each reviewer studies the work product individually to identify anomalies.'
                ),
              },
              {
                title: lt('3. Communication & Analysis', '3. Communication & Analysis'),
                text: lt(
                  'Thảo luận các issue, làm rõ misunderstanding và thống nhất action.',
                  'Discuss issues, clarify misunderstandings, and agree on actions.'
                ),
              },
            ],
          },
          {
            title: lt(
              'Minh hoạ — Vai trò thường gặp trong review',
              'Visual — Common review roles'
            ),
            items: [
              {
                title: lt('Author', 'Author'),
                text: lt(
                  'Người tạo ra work product đang được review.',
                  'The person who created the work product under review.'
                ),
              },
              {
                title: lt('Moderator', 'Moderator'),
                text: lt(
                  'Điều phối review để buổi review đi đúng mục tiêu và không lan man.',
                  'Facilitates the review so it stays focused and useful.'
                ),
              },
              {
                title: lt('Reviewer / Scribe', 'Reviewer / Scribe'),
                text: lt(
                  'Reviewer tìm issue; scribe ghi lại vấn đề, action và kết luận.',
                  'Reviewers identify issues; the scribe records problems, actions, and outcomes.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Một bug bảo mật nghiêm trọng có thể bắt đầu từ một acceptance criterion thiếu dòng “mật khẩu phải được che khi nhập”. Nếu requirement được review bởi BA, tester và dev trước khi code, issue này có thể được bắt ngay ở mức static testing mà không cần chờ đến UAT hoặc production.',
            'A serious security issue can start with an acceptance criterion that forgot to state “the password field must be masked while typing.” If the requirement is reviewed by the BA, tester, and developer before coding, the issue may be caught during static testing without waiting for UAT or production.'
          ),
        },
      },
      {
        id: 'review-types',
        title: lt(
          '4. Review types và success factors',
          '4. Review Types and Success Factors'
        ),
        paragraphs: ll(
          [
            'Syllabus nhắc tới informal review, walkthrough, technical review và inspection. Điểm khác nhau chính giữa chúng nằm ở mức độ formal, mục tiêu, cách ghi nhận issue và sự chuẩn hóa của process.',
            'Informal review thường nhẹ và linh hoạt. Walkthrough thường do author dẫn dắt để giải thích work product cho người khác. Technical review có tính kỹ thuật hơn và tập trung vào chất lượng nội dung. Inspection là dạng formal nhất, thường có quy trình và vai trò rõ ràng hơn.',
          ],
          [
            'The syllabus mentions informal review, walkthrough, technical review, and inspection. Their main differences lie in formality, purpose, issue tracking, and process discipline.',
            'Informal reviews are lightweight and flexible. Walkthroughs are often led by the author to explain the work product. Technical reviews focus more deeply on technical quality. Inspections are the most formal and usually have clearly defined roles and procedures.',
          ]
        ),
        bullets: ll(
          [
            'Không phải lúc nào review formal hơn cũng tốt hơn; phải phù hợp context.',
            'Success factors gồm mục tiêu rõ, tài liệu đủ tốt để review, người tham gia phù hợp, và văn hoá feedback tích cực.',
            'Review không nên biến thành buổi đổ lỗi; mục tiêu là cải thiện chất lượng work product.',
          ],
          [
            'More formal is not always better; the review style must fit the context.',
            'Success factors include clear objectives, review-ready work products, suitable participants, and a constructive feedback culture.',
            'Reviews should not become blame sessions; the purpose is to improve the quality of the work product.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Độ formal tăng dần',
              'Visual — Increasing formality'
            ),
            items: [
              {
                title: lt('Informal Review', 'Informal Review'),
                text: lt(
                  'Nhanh, linh hoạt, ít ceremony; phù hợp khi cần feedback sớm.',
                  'Fast, flexible, and low-ceremony; useful for early feedback.'
                ),
              },
              {
                title: lt('Walkthrough / Technical Review', 'Walkthrough / Technical Review'),
                text: lt(
                  'Có mục tiêu rõ hơn, thường có chuẩn bị và thảo luận kỹ hơn.',
                  'More structured, with clearer goals and usually more preparation.'
                ),
              },
              {
                title: lt('Inspection', 'Inspection'),
                text: lt(
                  'Formal nhất; phù hợp khi chất lượng và compliance là cực kỳ quan trọng.',
                  'The most formal; useful when quality and compliance are highly critical.'
                ),
              },
            ],
          },
        ],
      },
    ],
    examFocus: ll(
      [
        'Nhớ static testing không cần chạy phần mềm.',
        'Phân biệt static testing với dynamic testing.',
        'Nhớ review process và các vai trò chính.',
        'Phân biệt 4 review types theo mức độ formal.',
      ],
      [
        'Remember that static testing does not execute software.',
        'Be able to compare static and dynamic testing.',
        'Know the review process and the main roles.',
        'Differentiate the four review types by formality.',
      ]
    ),
    summary: ll(
      [
        'Static testing giúp bắt defect sớm trong tài liệu và work products.',
        'Dynamic testing vẫn cần, nhưng static testing giúp giảm chi phí sửa lỗi về sau.',
        'Review process có cấu trúc và có nhiều vai trò khác nhau.',
        'Review types khác nhau chủ yếu ở mức độ formal và mục tiêu.',
      ],
      [
        'Static testing helps catch defects early in documentation and work products.',
        'Dynamic testing is still needed, but static testing lowers later fix costs.',
        'The review process is structured and involves different roles.',
        'Review types mainly differ by formality and purpose.',
      ]
    ),
  },
  {
    slug: 'chapter-4-test-analysis-and-design',
    number: 4,
    studyMinutes: 390,
    title: lt('Chương 4 — Phân tích và thiết kế kiểm thử', 'Chapter 4 — Test Analysis and Design'),
    shortTitle: lt('Phân tích và thiết kế kiểm thử', 'Test Analysis and Design'),
    intro: lt(
      'Đây là chương nặng nhất trong toàn bộ Foundation Level. Nó không chỉ hỏi bạn “kỹ thuật kiểm thử là gì”, mà còn muốn bạn hiểu khi nào nên dùng kỹ thuật nào, coverage item là gì, và cách biến requirement hoặc structure thành test cases có chất lượng.',
      'This is the heaviest chapter in the whole Foundation Level syllabus. It is not only about naming techniques. It expects you to understand when to use them, what their coverage items are, and how to derive useful tests from specifications or structure.'
    ),
    introNote: lt(
      'Nếu bạn muốn nâng level từ “biết lý thuyết testing” sang “biết thiết kế test”, Chapter 4 là chỗ quan trọng nhất. Đây cũng là chương rất hay ra ví dụ nhỏ, bài tập mini và câu hỏi áp dụng.',
      'If you want to move from “knowing testing theory” to “being able to design tests”, Chapter 4 is the key chapter. It is also one of the most common sources of mini-scenarios and applied exam questions.'
    ),
    learningObjectives: ll(
      [
        'Phân biệt các nhóm test techniques: black-box, white-box, experience-based, collaboration-based.',
        'Áp dụng được equivalence partitioning và boundary value analysis.',
        'Hiểu decision table testing và state transition testing.',
        'Giải thích statement coverage và branch coverage.',
        'Hiểu error guessing, exploratory testing, checklist-based testing.',
        'Nắm được user stories, acceptance criteria và ATDD ở mức foundation.',
      ],
      [
        'Differentiate the main technique groups: black-box, white-box, experience-based, and collaboration-based.',
        'Apply equivalence partitioning and boundary value analysis.',
        'Understand decision table testing and state transition testing.',
        'Explain statement coverage and branch coverage.',
        'Understand error guessing, exploratory testing, and checklist-based testing.',
        'Understand user stories, acceptance criteria, and ATDD at foundation level.',
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
      'checklist-based testing',
      'ATDD',
    ],
    sections: [
      {
        id: 'technique-overview',
        title: lt('1. Tổng quan các kỹ thuật kiểm thử', '1. Test Technique Overview'),
        paragraphs: ll(
          [
            'Một trong những ý quan trọng nhất của chương này là: test technique khác nhau chủ yếu ở “nguồn thông tin” mà bạn dùng để thiết kế test. Nếu bạn dựa vào requirement hoặc spec, đó là black-box thinking. Nếu bạn dựa vào cấu trúc code hoặc control flow, đó là white-box thinking. Nếu bạn dựa vào kinh nghiệm, lịch sử lỗi hoặc trực giác của tester, đó là experience-based thinking.',
            'Không có kỹ thuật nào luôn tốt nhất trong mọi trường hợp. Nhiều dự án mạnh là dự án biết kết hợp kỹ thuật: dùng black-box để phủ requirement, white-box để nhìn cấu trúc có bị bỏ sót không, experience-based để tìm ra chỗ “có mùi” mà tài liệu chưa nói tới.',
          ],
          [
            'One of the most important ideas in this chapter is that test techniques differ mainly by the source of information used to design tests. If you derive tests from requirements or specifications, that is black-box thinking. If you derive tests from internal code structure or control flow, that is white-box thinking. If you rely on tester intuition, history, and experience, that is experience-based thinking.',
            'No technique is universally best in every situation. Strong projects often combine techniques: black-box for requirement coverage, white-box to see whether structure is missed, and experience-based techniques to explore suspicious areas that specifications do not describe well.',
          ]
        ),
        visuals: [
          {
            title: lt('Minh hoạ — 3 họ kỹ thuật chính', 'Visual — Three major technique families'),
            items: [
              {
                title: lt('Black-box', 'Black-box'),
                text: lt(
                  'Nhìn từ bên ngoài: dựa vào đầu vào, đầu ra, rule, state và expected behavior.',
                  'Looks from the outside: uses inputs, outputs, rules, states, and expected behavior.'
                ),
              },
              {
                title: lt('White-box', 'White-box'),
                text: lt(
                  'Nhìn vào cấu trúc bên trong: câu lệnh, nhánh, luồng điều khiển.',
                  'Looks at internal structure: statements, branches, and control flow.'
                ),
              },
              {
                title: lt('Experience-based', 'Experience-based'),
                text: lt(
                  'Dùng kinh nghiệm, trực giác, lịch sử defect, checklist và exploratory thinking.',
                  'Uses experience, intuition, defect history, checklists, and exploratory thinking.'
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'black-box',
        title: lt('2. Kỹ thuật hộp đen', '2. Black-Box Test Techniques'),
        paragraphs: ll(
          [
            'Black-box techniques đặc biệt hữu ích khi bạn có requirement, business rules hoặc specification rõ ràng. Thay vì test ngẫu nhiên, các kỹ thuật này giúp bạn suy nghĩ có hệ thống hơn về input space và expected behavior.',
            'Equivalence partitioning chia input thành các nhóm mà hệ thống được kỳ vọng xử lý giống nhau. Boundary value analysis đi sâu vào các giá trị biên — nơi defect thường xuất hiện. Decision table testing phù hợp khi hệ thống có nhiều rule phụ thuộc vào tổ hợp điều kiện. State transition testing phù hợp với những hệ thống có state và event rõ ràng như đăng nhập, khóa tài khoản, quy trình phê duyệt.',
          ],
          [
            'Black-box techniques are especially useful when requirements, business rules, or specifications are available. Instead of random testing, these techniques help you reason systematically about the input space and expected behavior.',
            'Equivalence partitioning divides input into groups that the system is expected to treat similarly. Boundary value analysis focuses on edge values, where defects often appear. Decision table testing fits systems with many rules driven by combinations of conditions. State transition testing fits systems with explicit states and events such as login, account locking, or approval workflows.',
          ]
        ),
        visuals: [
          {
            title: lt('Minh hoạ — 4 kỹ thuật hộp đen hay gặp nhất', 'Visual — Four common black-box techniques'),
            items: [
              {
                title: lt('Equivalence Partitioning', 'Equivalence Partitioning'),
                text: lt(
                  'Ví dụ tuổi hợp lệ 18–60: có thể chia thành <18, 18–60, >60 thay vì test ngẫu nhiên hàng chục giá trị.',
                  'If the valid age range is 18–60, you can partition inputs into <18, 18–60, and >60 instead of choosing random values.'
                ),
              },
              {
                title: lt('Boundary Value Analysis', 'Boundary Value Analysis'),
                text: lt(
                  'Nếu giới hạn là 18–60, các giá trị 17, 18, 19, 59, 60, 61 thường giá trị hơn 27 hoặc 42.',
                  'If the limit is 18–60, values like 17, 18, 19, 59, 60, and 61 are often more valuable than random values such as 27 or 42.'
                ),
              },
              {
                title: lt('Decision Table Testing', 'Decision Table Testing'),
                text: lt(
                  'Phù hợp khi hệ thống có nhiều điều kiện kết hợp, ví dụ khách VIP + còn tồn kho + thanh toán hợp lệ thì có được miễn phí ship hay không.',
                  'Useful when several conditions combine, such as VIP customer + stock available + valid payment influencing free shipping.'
                ),
              },
              {
                title: lt('State Transition Testing', 'State Transition Testing'),
                text: lt(
                  'Phù hợp với flow như đăng nhập sai 3 lần thì khóa tài khoản hoặc ticket chuyển giữa New → In Progress → Resolved.',
                  'Useful for flows like account lock after three failed logins or ticket states such as New → In Progress → Resolved.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Giả sử form đăng ký chỉ nhận mật khẩu dài từ 8 đến 20 ký tự. EP sẽ nghĩ theo nhóm: dưới 8, từ 8 đến 20, trên 20. BVA sẽ tập trung vào 7, 8, 9, 19, 20, 21. Hai kỹ thuật này thường đi cùng nhau rất tự nhiên.',
            'Suppose a registration form accepts passwords with length 8 to 20 characters only. EP creates partitions: below 8, between 8 and 20, and above 20. BVA focuses on 7, 8, 9, 19, 20, and 21. In practice, these two techniques naturally work well together.'
          ),
        },
      },
      {
        id: 'white-box',
        title: lt('3. Kỹ thuật hộp trắng', '3. White-Box Test Techniques'),
        paragraphs: ll(
          [
            'White-box techniques nhìn vào cấu trúc bên trong của code hoặc logic. Ở foundation level, trọng tâm là statement testing và branch testing. Statement coverage hỏi “đã chạy qua câu lệnh này chưa?”. Branch coverage hỏi “đã đi qua các nhánh quyết định quan trọng chưa?”.',
            'Điểm rất dễ nhầm là coverage cao không có nghĩa hệ thống hết lỗi. Coverage chỉ cho thấy bạn đã chạm tới bao nhiêu phần của structure, chứ không đảm bảo bạn đã test đủ dữ liệu, đủ tình huống nghiệp vụ hoặc đủ negative cases.',
          ],
          [
            'White-box techniques look at the internal structure of code or logic. At foundation level, the focus is on statement testing and branch testing. Statement coverage asks whether a statement has been executed. Branch coverage asks whether each decision branch has been taken.',
            'A very common misunderstanding is that high coverage means the system is free of defects. Coverage only shows how much of the structure has been exercised. It does not guarantee that you used enough data combinations, business scenarios, or negative conditions.',
          ]
        ),
        visuals: [
          {
            title: lt('Minh hoạ — Statement vs Branch', 'Visual — Statement vs Branch'),
            items: [
              {
                title: lt('Statement Coverage', 'Statement Coverage'),
                text: lt(
                  'Nếu một câu lệnh được chạy ít nhất một lần, nó được tính là covered.',
                  'If a statement executes at least once, it counts as covered.'
                ),
              },
              {
                title: lt('Branch Coverage', 'Branch Coverage'),
                text: lt(
                  'Cần đi qua cả nhánh true lẫn false của điều kiện, nên thường mạnh hơn statement coverage.',
                  'You must execute both the true and false branches of a decision, so it is usually stronger than statement coverage.'
                ),
              },
              {
                title: lt('Điểm cần nhớ', 'Key takeaway'),
                text: lt(
                  '100% statement coverage không đảm bảo 100% branch coverage.',
                  '100% statement coverage does not guarantee 100% branch coverage.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Với logic “nếu số dư > 0 thì cho phép thanh toán”, một test có số dư 100 có thể chạy được phần code bên trong if và tăng statement coverage. Nhưng nếu bạn chưa có test số dư = 0 hoặc âm, bạn chưa hề kiểm tra nhánh còn lại. Đó là lý do branch coverage thường cho góc nhìn mạnh hơn.',
            'With logic like “if balance > 0 then allow payment”, a test with balance = 100 may execute the inside of the if block and improve statement coverage. But if you never test balance = 0 or a negative balance, you have not checked the other branch. That is why branch coverage is often stronger.'
          ),
        },
      },
      {
        id: 'experience-based',
        title: lt('4. Kỹ thuật dựa trên kinh nghiệm', '4. Experience-Based Techniques'),
        paragraphs: ll(
          [
            'Trong đời thực, requirement không phải lúc nào cũng đủ tốt để bạn chỉ dùng black-box techniques. Có những chỗ tester phải dựa vào kinh nghiệm, defect history, trực giác về rủi ro và hiểu biết domain để đoán nơi dễ lỗi. Đó là lúc error guessing, exploratory testing và checklist-based testing trở nên hữu ích.',
            'Experience-based techniques đặc biệt mạnh trong các hệ thống phức tạp, các feature mới chưa ổn định, hoặc những chỗ business rule thay đổi liên tục. Chúng không thay thế kỹ thuật có cấu trúc, nhưng bổ sung rất tốt cho chúng.',
          ],
          [
            'In real projects, requirements are not always good enough for you to rely only on structured black-box techniques. Testers often need to use experience, defect history, domain knowledge, and intuition to identify where problems are likely. That is where error guessing, exploratory testing, and checklist-based testing become valuable.',
            'Experience-based techniques are especially strong in complex systems, unstable features, or areas where business rules change often. They do not replace structured techniques, but they complement them very well.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — 3 kỹ thuật dựa trên kinh nghiệm',
              'Visual — Three experience-based techniques'
            ),
            items: [
              {
                title: lt('Error Guessing', 'Error Guessing'),
                text: lt(
                  'Dựa vào kinh nghiệm để đoán “chỗ này dễ lỗi”, ví dụ trường date, format tiền, phân quyền, null data.',
                  'Use experience to guess where issues are likely, such as dates, money formats, authorization, or null data.'
                ),
              },
              {
                title: lt('Exploratory Testing', 'Exploratory Testing'),
                text: lt(
                  'Học hệ thống, thiết kế test và thực thi gần như cùng lúc. Phù hợp khi cần hiểu nhanh feature mới.',
                  'Learn the system, design tests, and execute them almost at the same time. Useful when exploring a new feature quickly.'
                ),
              },
              {
                title: lt('Checklist-Based Testing', 'Checklist-Based Testing'),
                text: lt(
                  'Dùng checklist những chỗ hay quên như validation, message, permission, localization, responsive, logging.',
                  'Use a checklist for commonly forgotten areas such as validation, messaging, permissions, localization, responsiveness, and logging.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Một tester từng thấy nhiều bug ở chức năng nhập ngày tháng sẽ rất dễ “ngửi” ra rằng form mới cũng cần test ngày 29/02, timezone, định dạng dd/MM và MM/dd, copy-paste dữ liệu, hoặc nhập từ mobile keyboard. Đó là giá trị của experience-based thinking.',
            'A tester who has seen many date-input defects will instinctively suspect similar risks in a new form: leap day, timezone handling, dd/MM vs MM/dd format, pasted values, or mobile keyboard input. That is the value of experience-based thinking.'
          ),
        },
      },
      {
        id: 'collaboration-based',
        title: lt('5. Collaboration-based approaches', '5. Collaboration-Based Approaches'),
        paragraphs: ll(
          [
            'Nhóm kỹ thuật này nhấn mạnh rằng testing không chỉ là hành động ở cuối cùng, mà còn là một phần của việc làm rõ yêu cầu cùng với cả team. User stories tốt, acceptance criteria rõ và ATDD giúp rất nhiều trong việc giảm hiểu nhầm trước khi code bắt đầu.',
            'Nếu một story mơ hồ, tester sẽ phải test trong trạng thái thiếu rõ ràng. Nếu acceptance criteria rõ, team có một shared target để build và test. Đây là lý do collaboration-based approaches rất quan trọng trong môi trường agile.',
          ],
          [
            'This family of techniques highlights that testing is not only something done at the end. It is also part of clarifying requirements together with the team. Good user stories, clear acceptance criteria, and ATDD all help reduce misunderstandings before coding begins.',
            'If a story is vague, testers are forced to test against uncertainty. If acceptance criteria are clear, the team has a shared target for both development and testing. That is why collaboration-based approaches matter so much in agile environments.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — User story, acceptance criteria và ATDD',
              'Visual — User stories, acceptance criteria, and ATDD'
            ),
            items: [
              {
                title: lt('User Story', 'User Story'),
                text: lt(
                  'Mô tả nhu cầu theo vai trò, mục tiêu và giá trị. Ví dụ: “Là khách hàng, tôi muốn lưu nhiều địa chỉ giao hàng để checkout nhanh hơn.”',
                  'Describes a need in terms of role, goal, and value. Example: “As a customer, I want to save multiple delivery addresses so checkout is faster.”'
                ),
              },
              {
                title: lt('Acceptance Criteria', 'Acceptance Criteria'),
                text: lt(
                  'Làm rõ điều kiện để story được xem là hoàn thành và đúng.',
                  'Clarifies the conditions that must be satisfied for the story to be considered complete and correct.'
                ),
              },
              {
                title: lt('ATDD', 'ATDD'),
                text: lt(
                  'Business, dev và tester cùng thống nhất ví dụ chấp nhận trước khi phát triển, giảm hiểu nhầm rất mạnh.',
                  'Business, developers, and testers agree on acceptance examples before implementation, greatly reducing misunderstandings.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Story: “Là người dùng, tôi muốn reset mật khẩu qua email.” Nếu acceptance criteria ghi rõ token hết hạn sau 15 phút, link chỉ dùng được 1 lần, password mới phải khác password cũ, và có email xác nhận sau khi đổi thành công, thì dev biết phải build gì và tester biết phải test gì ngay từ đầu.',
            'Story: “As a user, I want to reset my password via email.” If the acceptance criteria clearly state that the token expires after 15 minutes, the link is single-use, the new password must differ from the old one, and a confirmation email is sent after success, developers know what to build and testers know what to test from the start.'
          ),
        },
      },
    ],
    examFocus: ll(
      [
        'Chapter 4 rất hay có câu hỏi áp dụng kỹ thuật vào input cụ thể.',
        'Phải phân biệt rõ EP, BVA, decision table và state transition.',
        'Nhớ sự khác nhau giữa statement coverage và branch coverage.',
        'Exploratory testing không có nghĩa là test ngẫu nhiên vô tổ chức.',
      ],
      [
        'Chapter 4 often uses mini-scenarios to test technique application.',
        'Be very clear on EP, BVA, decision tables, and state transitions.',
        'Remember the difference between statement coverage and branch coverage.',
        'Exploratory testing does not mean random, unstructured clicking.',
      ]
    ),
    summary: ll(
      [
        'Kỹ thuật kiểm thử khác nhau ở nguồn thông tin dùng để thiết kế test.',
        'Black-box rất mạnh khi requirement rõ.',
        'White-box giúp nhìn cấu trúc bên trong.',
        'Experience-based tận dụng kinh nghiệm và history của tester.',
        'Collaboration-based approaches giúp team làm rõ expectation từ sớm.',
      ],
      [
        'Techniques differ by the information source used to derive tests.',
        'Black-box techniques are strong when requirements are clear.',
        'White-box techniques expose structural gaps.',
        'Experience-based techniques use tester history and intuition.',
        'Collaboration-based approaches help teams align expectations early.',
      ]
    ),
  },
  {
    slug: 'chapter-5-managing-the-test-activities',
    number: 5,
    studyMinutes: 335,
    title: lt('Chương 5 — Quản lý hoạt động kiểm thử', 'Chapter 5 — Managing the Test Activities'),
    shortTitle: lt('Quản lý hoạt động kiểm thử', 'Managing the Test Activities'),
    intro: lt(
      'Nếu Chapter 4 thiên về “thiết kế test như thế nào”, thì Chapter 5 thiên về “quản lý testing ra sao để có hiệu quả”. Đây là chương rất thực tế vì nó chạm vào test plan, estimation, prioritization, risk management, test monitoring, reporting, configuration management và defect management.',
      'If Chapter 4 is about “how to design tests”, Chapter 5 is about “how to manage testing effectively”. This is a highly practical chapter because it covers test planning, estimation, prioritization, risk management, monitoring, reporting, configuration management, and defect management.'
    ),
    introNote: lt(
      'Rất nhiều câu hỏi ở chương này không khó về kỹ thuật nhưng dễ nhầm trong thực tế vì nhiều công ty dùng thuật ngữ hơi khác nhau. Hãy tập trung vào bản chất của từng khái niệm.',
      'Many topics in this chapter are not technically difficult, but they are easy to confuse because different companies use slightly different wording. Focus on the core meaning of each concept.'
    ),
    learningObjectives: ll(
      [
        'Hiểu mục đích và nội dung chính của test plan.',
        'Hiểu estimation techniques và test case prioritization.',
        'Hiểu test pyramid và testing quadrants.',
        'Phân biệt project risk và product risk.',
        'Hiểu test monitoring, control, completion và reporting.',
        'Hiểu configuration management và defect management.',
      ],
      [
        'Understand the purpose and key contents of a test plan.',
        'Understand estimation techniques and test case prioritization.',
        'Understand the test pyramid and testing quadrants.',
        'Differentiate project risk and product risk.',
        'Understand test monitoring, control, completion, and reporting.',
        'Understand configuration management and defect management.',
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
      'test monitoring',
      'test control',
      'test report',
      'defect management',
    ],
    sections: [
      {
        id: 'planning-estimation',
        title: lt('1. Test planning và estimation', '1. Test Planning and Estimation'),
        paragraphs: ll(
          [
            'Test plan là nơi team làm rõ “ta sẽ test cái gì, test như thế nào, ai test, khi nào test và khi nào được coi là đủ”. Một test plan không cần lúc nào cũng là tài liệu dài hàng chục trang, nhưng nó cần trả lời được các câu hỏi cốt lõi về scope, objective, approach, nguồn lực, rủi ro và tiêu chí hoàn thành.',
            'Estimation giúp team có kỳ vọng thực tế hơn về effort test. Một tester không chỉ test theo yêu cầu, mà còn phải đóng góp vào việc ước lượng để kế hoạch release hoặc iteration có tính khả thi hơn. Estimation có thể dựa vào history, analogy, ratio, extrapolation, expert judgement hoặc các kỹ thuật nhóm như planning poker / Wideband Delphi.',
          ],
          [
            'A test plan clarifies what will be tested, how it will be tested, who will do it, when it will be done, and when testing can be considered sufficient. A test plan does not always need to be a long document, but it must answer the core questions about scope, objectives, approach, resources, risks, and completion criteria.',
            'Estimation helps the team set more realistic expectations around test effort. A tester does not only test on request; they also contribute to estimation so that release or iteration planning becomes more achievable. Estimation may use history, analogy, ratio-based methods, extrapolation, expert judgement, or group techniques such as planning poker or Wideband Delphi.',
          ]
        ),
        visuals: [
          {
            title: lt('Minh hoạ — Test plan thường bao gồm gì?', 'Visual — What does a test plan usually contain?'),
            items: [
              {
                title: lt('Scope & Objective', 'Scope & Objective'),
                text: lt(
                  'Feature nào được test, feature nào chưa, mục tiêu lớn của đợt test là gì.',
                  'Which features are in scope, which are not, and what the overall goal of testing is.'
                ),
              },
              {
                title: lt('Approach & Resources', 'Approach & Resources'),
                text: lt(
                  'Manual/automation, môi trường, dữ liệu, số người tham gia, cách phối hợp.',
                  'Manual or automation approach, environments, data, people involved, and coordination.'
                ),
              },
              {
                title: lt('Entry / Exit Criteria', 'Entry / Exit Criteria'),
                text: lt(
                  'Điều kiện để bắt đầu test và điều kiện để kết thúc hoặc sign off.',
                  'The conditions required to start testing and the conditions used to stop or sign off.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Nếu feature đăng ký tài khoản còn thiếu môi trường email test và API xác thực OTP vẫn chưa ổn định, thì tester có thể nói rõ entry criteria chưa đạt và việc bắt đầu execution toàn diện lúc này là rủi ro. Đây là cách test planning hỗ trợ ra quyết định thực tế, chứ không chỉ là viết tài liệu.',
            'If an account registration feature still lacks an email test environment and the OTP validation API is unstable, a tester may state that the entry criteria are not yet met and that full execution would be risky. This is how test planning supports real decision-making rather than just producing documentation.'
          ),
        },
      },
      {
        id: 'prioritization-risk',
        title: lt(
          '2. Prioritization, test pyramid, testing quadrants và risk thinking',
          '2. Prioritization, Test Pyramid, Testing Quadrants, and Risk Thinking'
        ),
        paragraphs: ll(
          [
            'Không phải test case nào cũng có giá trị như nhau. Khi thời gian hữu hạn, team phải ưu tiên. Ưu tiên có thể dựa trên risk, business importance, complexity, frequency of use, recent changes hoặc historical defects. Đây là nơi tư duy risk-based testing bắt đầu phát huy tác dụng.',
            'Test pyramid và testing quadrants giúp bạn nhìn testing ở mức chiến lược hơn. Test pyramid gợi ý nên có nhiều test ở mức thấp và ít test end-to-end hơn vì chi phí và tốc độ. Testing quadrants giúp team thảo luận về loại feedback nào đang thiếu, thay vì chỉ nói chung chung “đã test chưa?”.',
          ],
          [
            'Not all test cases have the same value. When time is limited, teams must prioritize. Prioritization can be based on risk, business importance, complexity, frequency of use, recent changes, or historical defects. This is where risk-based thinking becomes very practical.',
            'The test pyramid and testing quadrants help you reason at a higher strategy level. The test pyramid suggests more tests at lower levels and fewer end-to-end tests because of speed and cost. Testing quadrants help teams discuss what kind of feedback is missing instead of only asking “has it been tested?”.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Cách ưu tiên test',
              'Visual — Ways to prioritize tests'
            ),
            items: [
              {
                title: lt('Risk-based', 'Risk-based'),
                text: lt(
                  'Chỗ có impact cao hoặc likelihood cao cần được test sớm và kỹ hơn.',
                  'Areas with high impact or high likelihood should be tested earlier and more deeply.'
                ),
              },
              {
                title: lt('Business-based', 'Business-based'),
                text: lt(
                  'Flow tạo doanh thu, thanh toán, đăng ký, đăng nhập thường được ưu tiên cao.',
                  'Revenue-generating flows such as payment, signup, and login are usually high priority.'
                ),
              },
              {
                title: lt('Change-based', 'Change-based'),
                text: lt(
                  'Khu vực vừa bị sửa hoặc vừa refactor thường cần ưu tiên regression hơn.',
                  'Recently changed or refactored areas often deserve stronger regression attention.'
                ),
              },
            ],
          },
          {
            title: lt(
              'Minh hoạ — Pyramid và Quadrants',
              'Visual — Pyramid and Quadrants'
            ),
            items: [
              {
                title: lt('Test Pyramid', 'Test Pyramid'),
                text: lt(
                  'Nhắc team tránh lệ thuộc quá nhiều vào các test chậm, giòn và khó bảo trì ở mức E2E.',
                  'Reminds teams not to rely too heavily on slow, brittle, high-maintenance end-to-end tests.'
                ),
              },
              {
                title: lt('Testing Quadrants', 'Testing Quadrants'),
                text: lt(
                  'Giúp nhìn testing từ góc hỗ trợ team, hỗ trợ business, công nghệ hay khám phá sản phẩm.',
                  'Helps teams view testing through lenses such as supporting the team, supporting the business, technology-facing, or product critique.'
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'risk-management',
        title: lt('3. Risk Management', '3. Risk Management'),
        paragraphs: ll(
          [
            'Risk management trong testing là cách dùng testing effort để giảm uncertainty ở những chỗ quan trọng nhất. Không phải mọi risk đều giống nhau: project risk liên quan đến việc dự án có delivered được hay không; product risk liên quan đến việc sản phẩm có lỗi nghiêm trọng hoặc không đáp ứng kỳ vọng hay không.',
            'Khi phân tích product risk, tester thường quan tâm đến likelihood và impact. Một feature ít khi dùng nhưng nếu lỗi sẽ gây thiệt hại lớn vẫn có thể đáng ưu tiên. Ngược lại, một lỗi hiển thị nhỏ ở trang ít người dùng có thể không cần effort lớn bằng các flow cốt lõi.',
          ],
          [
            'Risk management in testing is about using test effort to reduce uncertainty in the most important places. Not all risks are the same: project risks affect whether the project can be delivered, while product risks affect whether the product might fail in serious or valuable ways.',
            'When analyzing product risk, testers often think about likelihood and impact. A rarely used feature may still deserve high attention if failure causes serious harm. On the other hand, a minor display issue in a low-traffic area may not deserve the same test effort as core business flows.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Project risk vs Product risk',
              'Visual — Project risk vs Product risk'
            ),
            items: [
              {
                title: lt('Project Risk', 'Project Risk'),
                text: lt(
                  'Thiếu môi trường, deadline dồn, team thiếu kỹ năng, dependency chậm, scope thay đổi nhiều.',
                  'Lack of environment, tight deadlines, missing skills, slow dependencies, or unstable scope.'
                ),
              },
              {
                title: lt('Product Risk', 'Product Risk'),
                text: lt(
                  'Tính sai tiền, sai phân quyền, rò rỉ dữ liệu, hiệu năng tệ, checkout lỗi, báo cáo sai.',
                  'Incorrect calculations, authorization errors, data leakage, poor performance, checkout failure, or incorrect reports.'
                ),
              },
              {
                title: lt('Risk-based testing', 'Risk-based testing'),
                text: lt(
                  'Ưu tiên nơi kết hợp likelihood cao và impact cao.',
                  'Prioritize where likelihood and impact combine into higher exposure.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Trong một app thanh toán, chức năng đổi avatar có thể ít rủi ro hơn flow hoàn tiền. Nếu thời gian test chỉ còn một ngày, team hiển nhiên nên ưu tiên refund flow, fraud prevention, đối soát transaction và notification liên quan đến tiền trước.',
            'In a payment application, changing a profile avatar is usually lower risk than the refund flow. If only one test day remains, the team should clearly prioritize refunds, fraud prevention, transaction reconciliation, and money-related notifications first.'
          ),
        },
      },
      {
        id: 'monitoring-reporting',
        title: lt(
          '4. Test monitoring, control, completion và reporting',
          '4. Test Monitoring, Control, Completion, and Reporting'
        ),
        paragraphs: ll(
          [
            'Monitoring là theo dõi tiến độ và trạng thái testing. Control là hành động điều chỉnh khi thấy lệch kế hoạch hoặc xuất hiện risk mới. Completion là giai đoạn tổng kết testing: coverage đã tới đâu, residual risk còn gì, có bài học nào cần lưu lại, testware nào cần lưu trữ.',
            'Metrics và reports không phải để “cho có”, mà để giúp stakeholder ra quyết định. Một test report tốt phải đúng audience: manager quan tâm risk và readiness; developer quan tâm defect cluster và technical impact; business quan tâm value, scope và release confidence.',
          ],
          [
            'Monitoring means tracking testing progress and status. Control means taking action when the plan drifts or new risks appear. Completion is the phase where testing is summarized: what coverage was achieved, what residual risk remains, what lessons were learned, and which testware should be archived.',
            'Metrics and reports do not exist just for formality; they support decisions. A good test report must fit its audience: managers care about risk and readiness, developers care about defect patterns and technical impact, and business stakeholders care about scope, value, and release confidence.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Metrics thường gặp',
              'Visual — Common testing metrics'
            ),
            items: [
              {
                title: lt('Progress / Coverage', 'Progress / Coverage'),
                text: lt(
                  'Bao nhiêu test đã chạy, coverage đến đâu, feature nào chưa chạm tới.',
                  'How many tests have run, how much coverage is achieved, and which areas remain untouched.'
                ),
              },
              {
                title: lt('Defect Status', 'Defect Status'),
                text: lt(
                  'Số defect mở/đóng, severity, age, cluster theo module.',
                  'Open versus closed defects, severity, age, and clustering by module.'
                ),
              },
              {
                title: lt('Residual Risk', 'Residual Risk'),
                text: lt(
                  'Sau tất cả effort test, còn điều gì chưa chắc chắn mà release owner cần biết.',
                  'After testing effort, what important uncertainty remains for the release owner to know.'
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'config-defect',
        title: lt(
          '5. Configuration Management và Defect Management',
          '5. Configuration Management and Defect Management'
        ),
        paragraphs: ll(
          [
            'Testing sẽ rất khó tin cậy nếu team không biết mình đang test đúng version nào, trên môi trường nào, với test data nào, và automation/log/report kia thuộc build nào. Đó là lý do configuration management quan trọng với testing.',
            'Defect management thì tập trung vào vòng đời của issue: phát hiện, ghi nhận, phân loại, giao việc, theo dõi, retest và đóng. Một defect report tốt giúp người khác reproduce được vấn đề nhanh, hiểu được mức độ nghiêm trọng và biết cần ưu tiên ra sao.',
          ],
          [
            'Testing becomes difficult to trust if the team does not know which version is under test, in which environment, with which data set, and which automation or reports belong to which build. That is why configuration management matters to testing.',
            'Defect management focuses on the issue lifecycle: detection, logging, classification, assignment, tracking, retesting, and closure. A good defect report helps others reproduce the issue quickly, understand severity, and decide priority effectively.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Một defect report nên có gì?',
              'Visual — What should a defect report contain?'
            ),
            items: [
              {
                title: lt('Mô tả & Bước tái hiện', 'Description & Steps'),
                text: lt(
                  'Ngắn gọn nhưng đủ để người khác lặp lại được defect.',
                  'Short, but detailed enough for someone else to reproduce the issue.'
                ),
              },
              {
                title: lt('Expected / Actual', 'Expected / Actual'),
                text: lt(
                  'Cho thấy rõ chênh lệch giữa hành vi mong đợi và hành vi thật.',
                  'Makes the gap between expected and actual behavior explicit.'
                ),
              },
              {
                title: lt('Evidence & Context', 'Evidence & Context'),
                text: lt(
                  'Ảnh, video, log, environment, build version, test data, severity, priority.',
                  'Screenshots, videos, logs, environment, build version, test data, severity, and priority.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Nếu bug chỉ ghi “Thanh toán lỗi”, dev gần như phải hỏi lại mọi thứ. Nhưng nếu bug ghi rõ build version, môi trường, account dùng để test, steps, dữ liệu giao dịch, expected result, actual result và attach video thì defect đi vào xử lý sẽ nhanh hơn rất nhiều.',
            'If a bug only says “Payment failed”, developers will almost certainly need to ask follow-up questions. But if the report includes build version, environment, account used, transaction data, steps, expected result, actual result, and a video, the issue can move much faster.'
          ),
        },
      },
    ],
    examFocus: ll(
      [
        'Hiểu đúng entry criteria vs exit criteria.',
        'Ưu tiên test dựa trên risk là ý rất hay xuất hiện.',
        'Phân biệt project risk và product risk.',
        'Nhớ defect report tốt cần đủ thông tin để reproduce.',
      ],
      [
        'Understand entry criteria versus exit criteria correctly.',
        'Risk-based prioritization is a frequent theme.',
        'Differentiate project risk from product risk.',
        'Remember that a good defect report must support reproducibility.',
      ]
    ),
    summary: ll(
      [
        'Testing cần được quản lý như một hoạt động có kế hoạch và có mục tiêu.',
        'Estimation, prioritization và risk management quyết định effort được dùng ở đâu.',
        'Monitoring và reporting chỉ có ý nghĩa khi giúp stakeholder ra quyết định.',
        'Configuration management và defect management là nền tảng để testing đáng tin cậy hơn.',
      ],
      [
        'Testing must be managed as a planned activity with clear goals.',
        'Estimation, prioritization, and risk management shape where effort is spent.',
        'Monitoring and reporting matter when they support decisions.',
        'Configuration management and defect management make testing more reliable.',
      ]
    ),
  },
  {
    slug: 'chapter-6-test-tools',
    number: 6,
    studyMinutes: 20,
    title: lt('Chương 6 — Công cụ kiểm thử', 'Chapter 6 — Test Tools'),
    shortTitle: lt('Công cụ kiểm thử', 'Test Tools'),
    intro: lt(
      'Chương cuối cùng ngắn nhất nhưng rất thực tế: công cụ hỗ trợ được những gì, và tại sao automation vừa có lợi vừa có rủi ro. Đây là chương mà nhiều người hay học quá nhanh, nhưng thực ra nó rất quan trọng vì dễ gắn với kinh nghiệm thực tế của tester.',
      'The final chapter is the shortest, but it is highly practical: what different tools can support and why automation brings both benefits and risks. Many learners rush through this chapter, but it matters because it connects directly with real-world testing work.'
    ),
    introNote: lt(
      'Điểm quan trọng nhất của chương này là: tool hỗ trợ testing, chứ không thay thế tư duy kiểm thử.',
      'The single most important takeaway from this chapter is that tools support testing, but they do not replace testing thinking.'
    ),
    learningObjectives: ll(
      [
        'Hiểu các nhóm công cụ hỗ trợ cho testing.',
        'Nhớ lợi ích chính của test automation.',
        'Nhớ rủi ro và hạn chế chính của test automation.',
        'Hiểu rằng chọn tool cần bám vào context, không theo phong trào.',
      ],
      [
        'Understand the main categories of tools that support testing.',
        'Recall the key benefits of test automation.',
        'Recall the key risks and limitations of test automation.',
        'Understand that tool selection must fit context rather than trends.',
      ]
    ),
    keywords: [
      'test tool',
      'test management tool',
      'static testing tool',
      'test automation',
      'CI/CD',
      'performance testing tool',
      'service virtualization',
    ],
    sections: [
      {
        id: 'tool-support',
        title: lt('1. Tool Support for Testing', '1. Tool Support for Testing'),
        paragraphs: ll(
          [
            'Một trong những hiểu nhầm thường gặp là nghĩ “test tool” chỉ có nghĩa là tool automation UI. Thực tế tool support for testing rộng hơn nhiều. Có tool cho test management, tool cho requirement hoặc traceability, tool cho static analysis, tool cho test design, tool cho execution, tool cho performance, tool cho CI/CD, tool cho monitoring, và tool cho collaboration.',
            'Syllabus không muốn bạn thuộc tên tool cụ thể, mà muốn bạn hiểu nhóm công cụ nào hỗ trợ nhóm hoạt động nào. Khi hiểu như vậy, bạn sẽ không bị lệ thuộc vào brand name mà sẽ biết cách suy nghĩ theo need của team.',
          ],
          [
            'A common misconception is that a “test tool” only means a UI automation tool. In reality, tool support for testing is much broader. There are tools for test management, requirements or traceability, static analysis, test design, execution, performance, CI/CD, monitoring, and collaboration.',
            'The syllabus does not expect you to memorize product names. It expects you to understand which categories of tools support which testing activities. Once you think in categories rather than brands, you can choose tools based on team needs instead of hype.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Các nhóm công cụ phổ biến',
              'Visual — Common tool categories'
            ),
            items: [
              {
                title: lt('Management / Reporting', 'Management / Reporting'),
                text: lt(
                  'Quản lý test cases, execution, traceability, defect status, dashboard, report.',
                  'Manage test cases, execution, traceability, defect status, dashboards, and reports.'
                ),
              },
              {
                title: lt('Static / Design / Execution', 'Static / Design / Execution'),
                text: lt(
                  'Static analysis, review support, test design support, automation execution.',
                  'Support static analysis, reviews, test design, and automated execution.'
                ),
              },
              {
                title: lt('Performance / DevOps / Collaboration', 'Performance / DevOps / Collaboration'),
                text: lt(
                  'Performance testing, CI/CD, monitoring, log analysis, ticketing, shared documentation.',
                  'Performance testing, CI/CD, monitoring, log analysis, ticketing, and shared documentation.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Một team có thể dùng Jira để theo dõi issue, TestRail hoặc hệ thống nội bộ để quản lý test case, Postman để test API, Playwright để chạy UI automation, và Grafana/Kibana để theo dõi sau release. Tất cả đều là “tool support for testing”, nhưng mỗi tool hỗ trợ một phần khác nhau của chất lượng.',
            'A team may use Jira for issue tracking, TestRail or an internal system for test case management, Postman for API testing, Playwright for UI automation, and Grafana or Kibana for post-release monitoring. All of these are forms of tool support for testing, but each one supports a different part of quality work.'
          ),
        },
      },
      {
        id: 'automation-benefits-risks',
        title: lt(
          '2. Lợi ích và rủi ro của tự động hóa kiểm thử',
          '2. Benefits and Risks of Test Automation'
        ),
        paragraphs: ll(
          [
            'Automation có những lợi ích rất rõ: tốc độ, tính lặp lại, khả năng chạy thường xuyên, giảm effort lặp đi lặp lại của con người, hỗ trợ regression tốt hơn, và tạo feedback nhanh hơn trong CI/CD. Đây là lý do tại sao nhiều team hiện đại xem automation là một phần quan trọng của delivery flow.',
            'Nhưng automation không phải “thuốc thần”. Nó có chi phí: chi phí xây framework, chi phí bảo trì script, chi phí sửa flaky test, chi phí học tool, chi phí cập nhật khi UI hoặc API thay đổi. Nếu chọn sai tool hoặc automate sai chỗ, team có thể mất rất nhiều effort nhưng vẫn không nhận lại giá trị tương xứng.',
          ],
          [
            'Automation offers obvious benefits: speed, repeatability, frequent execution, reduced repetitive human effort, stronger regression support, and faster feedback in CI/CD. That is why many modern teams consider automation an important part of the delivery flow.',
            'But automation is not magic. It has costs: framework setup cost, script maintenance cost, flaky test cost, learning cost, and update cost whenever the UI or API changes. If the wrong tool is chosen or the wrong tests are automated, the team can spend a great deal of effort without receiving proportional value.',
          ]
        ),
        visuals: [
          {
            title: lt(
              'Minh hoạ — Benefit vs Risk',
              'Visual — Benefit vs Risk'
            ),
            items: [
              {
                title: lt('Benefits', 'Benefits'),
                text: lt(
                  'Chạy lặp lại nhanh, giảm effort thủ công, hỗ trợ regression, tăng confidence trong pipeline.',
                  'Fast repeated execution, less manual repetition, strong regression support, higher confidence in the delivery pipeline.'
                ),
              },
              {
                title: lt('Risks', 'Risks'),
                text: lt(
                  'Script dễ gãy, maintenance cao, false confidence, chọn sai tool, automation không phù hợp với context.',
                  'Brittle scripts, high maintenance, false confidence, poor tool choice, and automation that does not fit the context.'
                ),
              },
              {
                title: lt('Điểm mấu chốt', 'Key point'),
                text: lt(
                  'Automation hỗ trợ testing tốt nhất khi chọn đúng thứ để automate.',
                  'Automation is most valuable when the right things are automated.'
                ),
              },
            ],
          },
        ],
        example: {
          title: lt('Ví dụ trực quan', 'Visual example'),
          text: lt(
            'Một flow checkout ổn định và lặp lại nhiều lần rất đáng để automate. Nhưng một popup UI đang thay đổi liên tục mỗi sprint có thể khiến script tốn công sửa hơn giá trị mà nó mang lại. Vì vậy câu hỏi đúng không phải là “có automate được không?” mà là “automate có đáng không?”.',
            'A stable checkout flow that runs frequently is a strong candidate for automation. But a popup UI that changes every sprint may cost more to maintain than the value it returns. The right question is not only “can this be automated?” but “is it worth automating?”.'
          ),
        },
      },
      {
        id: 'tool-selection',
        title: lt('3. Chọn tool và dùng tool đúng cách', '3. Choosing and Using Tools Wisely'),
        paragraphs: ll(
          [
            'Một team không nên chọn tool chỉ vì nó “phổ biến” hoặc “nghe hiện đại”. Tool chỉ thực sự tốt khi phù hợp với sản phẩm, team skill, delivery flow, ngân sách, môi trường hạ tầng và loại feedback mà team cần.',
            'Tool tốt nhưng quy trình kém vẫn cho kết quả tệ. Ngược lại, tool đơn giản nhưng dùng đúng chỗ có thể tạo giá trị lớn. Vì vậy chương này nhắc bạn rằng công cụ chỉ là phương tiện; tư duy kiểm thử, mục tiêu rõ ràng và sự phối hợp trong team mới là gốc.',
          ],
          [
            'A team should not choose a tool only because it is popular or sounds modern. A tool is good only when it fits the product, the team’s skills, the delivery flow, the infrastructure, the budget, and the feedback the team actually needs.',
            'A strong tool inside a poor process still gives poor outcomes. A simple tool used in the right place may create much more value. That is why this chapter reminds you that tools are only a means; testing thinking, clear objectives, and team collaboration are the real foundation.',
          ]
        ),
        bullets: ll(
          [
            'Chọn tool cần nhìn vào mục tiêu, cost và maintainability.',
            'Không phải mọi thứ nên automate.',
            'Tool chỉ phát huy tốt khi team có kỹ năng và quy trình hỗ trợ.',
          ],
          [
            'Tool selection should consider goals, cost, and maintainability.',
            'Not everything should be automated.',
            'Tools only perform well when the team has the skills and process to support them.',
          ]
        ),
      },
    ],
    examFocus: ll(
      [
        'Nhớ các nhóm công cụ hỗ trợ testing khác nhau.',
        'Nhớ rõ lợi ích và rủi ro của automation.',
        'Tránh suy nghĩ “dùng tool = chất lượng tốt hơn ngay lập tức”.',
      ],
      [
        'Remember the main categories of tool support.',
        'Know the benefits and risks of automation clearly.',
        'Avoid the idea that using a tool automatically guarantees better quality.',
      ]
    ),
    summary: ll(
      [
        'Tool support for testing rộng hơn nhiều so với chỉ UI automation.',
        'Automation có lợi nhưng cũng có chi phí và rủi ro.',
        'Chọn đúng thứ để automate quan trọng hơn chuyện automate thật nhiều.',
        'Tool tốt chỉ tạo ra giá trị khi phù hợp context và được dùng trong quy trình tốt.',
      ],
      [
        'Tool support for testing is much broader than UI automation alone.',
        'Automation brings benefits, but also cost and risk.',
        'Choosing the right thing to automate matters more than automating everything.',
        'Even a good tool creates value only when it fits the context and is used inside a good process.',
      ]
    ),
  },
];

export const getRemainingChapterBySlug = (slug: string) =>
  REMAINING_ISTQB_CHAPTERS.find((item) => item.slug === slug);

export const resolveRemainingChapter = (
  chapter: Chapter,
  locale: string
): ResolvedChapter => {
  const currentLocale = getLocale(locale);

  const resolvedSections = chapter.sections.map((section) => ({
    id: section.id,
    title: text(currentLocale, section.title),
    paragraphs: list(currentLocale, section.paragraphs),
    bullets: section.bullets ? list(currentLocale, section.bullets) : undefined,
    visuals: section.visuals?.map((visual) => ({
      title: text(currentLocale, visual.title),
      items: visual.items.map((item) => ({
        title: text(currentLocale, item.title),
        text: text(currentLocale, item.text),
      })),
    })),
    example: section.example
      ? {
          title: text(currentLocale, section.example.title),
          text: text(currentLocale, section.example.text),
        }
      : undefined,
  }));

  return {
    slug: chapter.slug,
    number: chapter.number,
    studyMinutes: chapter.studyMinutes,
    title: text(currentLocale, chapter.title),
    shortTitle: text(currentLocale, chapter.shortTitle),
    intro: text(currentLocale, chapter.intro),
    introNote: text(currentLocale, chapter.introNote),
    learningObjectives: list(currentLocale, chapter.learningObjectives),
    keywords: chapter.keywords,
    sections: resolvedSections,
    examFocus: list(currentLocale, chapter.examFocus),
    summary: list(currentLocale, chapter.summary),
    toc: resolvedSections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
  };
};

export const getRemainingChapterUi = (locale: string) =>
  chapterUi[getLocale(locale)];