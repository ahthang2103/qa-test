import { customGenerateMetadata } from '@/app/utils/pages';
import { Link } from '@/i18n/navigation';
import { PageLinks } from '@/app/components/PageLinks';

type SupportedLocale = 'vi' | 'en' | 'kr';

const getLocale = (locale: string): SupportedLocale => {
    if (locale === 'vi' || locale === 'en' || locale === 'kr') return locale;
    return 'en';
};

const content = {
    vi: {
        title: 'Chương 1 — Kiến thức nền tảng về kiểm thử',
        shortTitle: 'Kiến thức nền tảng về kiểm thử',
        breadcrumbHome: 'Tổng hợp kiến thức',
        breadcrumbHub: 'ISTQB Foundation Level',
        studyTimeLabel: 'Thời lượng học tối thiểu',
        studyTimeValue: '180 phút',
        intro:
            'Đây là chương mở nền cho toàn bộ ISTQB Foundation Level. Nếu hiểu chắc chương này, bạn sẽ dễ học hơn rất nhiều ở các chương sau vì gần như mọi khái niệm cốt lõi đều bắt đầu từ đây: testing là gì, vì sao phải test, test khác debugging như thế nào, 7 nguyên tắc kiểm thử, các hoạt động kiểm thử, testware, traceability, vai trò trong kiểm thử và những kỹ năng mà một tester cần có.',
        introNote:
            'Mục tiêu của trang này không phải chép lại syllabus, mà là diễn giải nó theo cách dễ học, dễ ôn, dễ nhớ và gần với công việc thực tế hơn.',
        tocTitle: 'Mục lục trong trang',
        toc: [
            { id: 'overview', label: '1. Tổng quan chương' },
            { id: 'what-is-testing', label: '2. Testing là gì?' },
            { id: 'objectives', label: '3. Test objectives' },
            { id: 'debugging', label: '4. Testing vs Debugging' },
            { id: 'why-necessary', label: '5. Vì sao kiểm thử cần thiết?' },
            { id: 'qa-and-quality', label: '6. Quality và QA' },
            { id: 'error-chain', label: '7. Root cause → Error → Defect → Failure' },
            { id: 'principles', label: '8. 7 nguyên tắc kiểm thử' },
            { id: 'activities', label: '9. Test activities và testware' },
            { id: 'traceability', label: '10. Traceability' },
            { id: 'roles', label: '11. Vai trò trong kiểm thử' },
            { id: 'skills', label: '12. Kỹ năng & good practices' },
            { id: 'exam-focus', label: '13. Trọng tâm khi ôn thi' },
            { id: 'summary', label: '14. Tóm tắt nhanh' },
        ],
        learningObjectivesTitle: 'Learning Objectives của chương 1',
        learningObjectives: [
            'Xác định được các mục tiêu điển hình của kiểm thử.',
            'Phân biệt được testing và debugging.',
            'Nêu ví dụ vì sao kiểm thử là cần thiết.',
            'Nhớ được mối liên hệ giữa testing và quality assurance.',
            'Phân biệt được root cause, error, defect và failure.',
            'Giải thích được bảy nguyên tắc kiểm thử.',
            'Giải thích được các hoạt động kiểm thử và các task liên quan.',
            'Phân biệt được các loại testware hỗ trợ cho từng hoạt động.',
            'Giải thích được giá trị của traceability.',
            'So sánh được các vai trò trong testing.',
            'Nêu được các kỹ năng chung cần có của tester, whole team approach và independence of testing.',
        ],
        keywordTitle: 'Keywords quan trọng',
        keywords: [
            'coverage',
            'debugging',
            'defect',
            'error',
            'failure',
            'quality',
            'quality assurance',
            'root cause',
            'test analysis',
            'test basis',
            'test case',
            'test completion',
            'test condition',
            'test control',
            'test data',
            'test design',
            'test execution',
            'test implementation',
            'test monitoring',
            'test object',
            'test objective',
            'test planning',
            'test procedure',
            'test process',
            'test result',
            'testing',
            'testware',
            'traceability',
            'validation',
            'verification',
        ],
        overviewTitle: '1. Tổng quan chương',
        overviewText1:
            'Chương 1 trả lời câu hỏi quan trọng nhất đối với người mới học testing: “Testing thực chất là gì?” Nhiều người khi mới bước vào nghề thường nghĩ testing chỉ là mở phần mềm lên, bấm thử chức năng và xem có lỗi hay không. Nhưng trong ISTQB, testing được nhìn rộng hơn rất nhiều: đó là một tập hợp hoạt động có mục tiêu rõ ràng, có đầu vào, có đầu ra, có artefact, có vai trò, có quản lý, có đánh giá rủi ro và có sự liên kết chặt với vòng đời phát triển phần mềm.',
        overviewText2:
            'Nếu học chắc chương này, bạn sẽ có bộ khung tư duy để hiểu các chapter sau. Ví dụ: Chapter 2 nói về testing trong SDLC, nhưng muốn hiểu được thì trước tiên bạn phải biết test process là gì. Chapter 4 nói về test techniques, nhưng muốn áp dụng được thì trước tiên bạn phải hiểu mục tiêu của testing là gì và test condition đến từ đâu. Vì vậy, Chapter 1 là nền móng thật sự.',
        whatIsTestingTitle: '2. Testing là gì?',
        whatIsTestingText1:
            'Theo tinh thần của syllabus, testing là một tập hợp các hoạt động nhằm phát hiện defect và đánh giá chất lượng của các sản phẩm công việc phần mềm. “Sản phẩm công việc” ở đây không chỉ là phần mềm chạy được, mà còn có thể là yêu cầu, user story, tài liệu thiết kế, test case, source code, báo cáo… Khi các work product này được đem ra kiểm tra, chúng trở thành test object.',
        whatIsTestingText2:
            'Một hiểu nhầm rất phổ biến là testing chỉ bao gồm việc thực thi test. Thực tế, chạy test chỉ là một phần. Trước khi chạy test, tester phải hiểu yêu cầu, xác định điều kiện kiểm thử, thiết kế test case, chuẩn bị test data, môi trường, công cụ, cách ghi nhận kết quả… Sau khi chạy test, tester còn phải đánh giá kết quả, theo dõi defect, báo cáo trạng thái và tổng kết test.',
        whatIsTestingText3:
            'Một hiểu nhầm khác là testing chỉ để kiểm tra xem phần mềm có đúng yêu cầu hay không. Điều đó chỉ đúng một nửa. Testing vừa liên quan đến verification — tức là “làm đúng theo tài liệu đặc tả chưa?”, vừa liên quan đến validation — tức là “thứ được làm ra có đúng thứ người dùng thật sự cần không?”.',
        visual1Title: 'Minh hoạ 1 — Verification vs Validation',
        verificationTitle: 'Verification',
        verificationDesc:
            'Kiểm tra xem sản phẩm có được xây đúng theo requirement, spec, design hay không.',
        validationTitle: 'Validation',
        validationDesc:
            'Kiểm tra xem sản phẩm có thật sự đáp ứng nhu cầu của user/stakeholder trong môi trường thực tế hay không.',
        visual2Title: 'Minh hoạ 2 — Dynamic vs Static Testing',
        dynamicTitle: 'Dynamic Testing',
        dynamicDesc:
            'Có chạy phần mềm. Ví dụ: bấm nút thanh toán, nhập dữ liệu, gọi API, so sánh actual result với expected result.',
        staticTitle: 'Static Testing',
        staticDesc:
            'Không cần chạy phần mềm. Ví dụ: review requirement, review source code, review test case, static analysis.',
        objectivesTitle: '3. Test Objectives — Mục tiêu điển hình của kiểm thử',
        objectivesIntro:
            'Testing không phải lúc nào cũng có cùng một mục tiêu. Mục tiêu có thể thay đổi theo context, test level, risk, SDLC, deadline hoặc kỳ vọng business.',
        objectives: [
            'Đánh giá work products như requirement, user story, thiết kế và code.',
            'Kích hoạt failure để phát hiện defect.',
            'Đảm bảo đạt mức coverage cần thiết cho test object.',
            'Giảm mức rủi ro của phần mềm có chất lượng không đủ.',
            'Xác minh rằng yêu cầu đã được đáp ứng.',
            'Kiểm tra sự tuân thủ với hợp đồng, pháp lý hoặc quy định.',
            'Cung cấp thông tin cho stakeholder để họ ra quyết định.',
            'Xây dựng niềm tin vào chất lượng của test object.',
            'Xác nhận rằng test object hoàn chỉnh và hoạt động như stakeholder mong đợi.',
        ],
        debuggingTitle: '4. Testing vs Debugging',
        debuggingText1:
            'Testing và debugging là hai hoạt động khác nhau nhưng liên quan chặt chẽ. Testing chủ yếu nhằm phát hiện rằng có vấn đề. Debugging nhằm tìm nguyên nhân và sửa nó.',
        debuggingText2:
            'Người tester có thể chỉ ra: bước tái hiện, expected result, actual result, severity, environment, bằng chứng. Nhưng việc tìm ra dòng code sai, sửa code và xác nhận nguyên nhân thường là việc của developer.',
        testingCardTitle: 'Testing',
        testingCardBullets: [
            'Mục tiêu: phát hiện defect / đánh giá chất lượng',
            'Có thể là static hoặc dynamic',
            'Tạo ra thông tin cho team và stakeholder',
            'Không nhất thiết phải sửa defect',
        ],
        debuggingCardTitle: 'Debugging',
        debuggingCardBullets: [
            'Mục tiêu: xác định nguyên nhân gốc và sửa lỗi',
            'Thường do developer thực hiện',
            'Đi vào logic, code, cấu hình, dữ liệu, dependency',
            'Kết quả cuối cùng là bản sửa lỗi',
        ],
        whyNecessaryTitle: '5. Vì sao kiểm thử là cần thiết?',
        whyNecessaryText1:
            'Phần mềm hiện diện trong mọi mặt của cuộc sống. Khi phần mềm lỗi, hậu quả có thể là mất thời gian, mất tiền, mất uy tín doanh nghiệp, thậm chí trong trường hợp nghiêm trọng còn gây ảnh hưởng đến an toàn con người.',
        whyNecessaryText2:
            'Không phải mọi defect đều đáng sợ như nhau, nhưng tester cần hiểu rằng testing là một hoạt động giúp giảm rủi ro. Nó không chứng minh phần mềm hoàn hảo, nhưng giúp tăng khả năng phát hiện vấn đề trước khi người dùng hoặc business phải trả giá cho lỗi đó.',
        whyNecessaryText3:
            'Testing càng được thực hiện sớm, càng có cơ hội ngăn defect “chảy” sang các bước sau. Một requirement mơ hồ nếu được review sớm sẽ rẻ hơn nhiều so với việc để tới khi code xong, test xong, release rồi mới phát hiện sai.',
        qaTitle: '6. Quality và Quality Assurance (QA)',
        qaText1:
            'Nhiều người hay dùng testing và QA như thể là một, nhưng chúng không hoàn toàn giống nhau. Testing là một trong các hoạt động góp phần kiểm soát và đánh giá chất lượng. QA rộng hơn, bao gồm cả việc thiết lập quy trình, tiêu chuẩn, cách làm việc và các biện pháp giúp phòng ngừa vấn đề xảy ra ngay từ đầu.',
        qaText2:
            'Nói ngắn gọn: testing thường thiên về phát hiện vấn đề; QA thiên về xây dựng hệ thống và quy trình để giảm khả năng sinh ra vấn đề.',
        errorChainTitle: '7. Root cause → Error → Defect → Failure',
        errorChainIntro:
            'Đây là chuỗi khái niệm cực kỳ quan trọng và rất hay bị nhầm trong đề thi.',
        rootCauseTitle: 'Root Cause',
        rootCauseDesc:
            'Nguyên nhân gốc. Ví dụ: yêu cầu mơ hồ, thiếu trao đổi, hiểu sai nghiệp vụ, áp lực deadline, thiếu review.',
        errorTitle: 'Error',
        errorDesc:
            'Sai sót của con người. Ví dụ: dev hiểu sai logic và viết sai điều kiện if.',
        defectTitle: 'Defect',
        defectDesc:
            'Khuyết điểm tồn tại trong work product. Ví dụ: trong code có điều kiện xử lý sai.',
        failureTitle: 'Failure',
        failureDesc:
            'Khi defect được kích hoạt lúc chạy phần mềm và hệ thống cho ra hành vi sai. Ví dụ: app tính sai phí hoặc crash.',
        chainExampleTitle: 'Ví dụ dễ nhớ',
        chainExampleText:
            'Business rule ghi không rõ ràng (root cause) → developer hiểu sai yêu cầu (error) → code viết sai công thức tính giảm giá (defect) → người dùng nhập đơn hàng và hệ thống tính tiền sai (failure).',
        principlesTitle: '8. Bảy nguyên tắc kiểm thử',
        principlesIntro:
            'Đây là phần vừa lý thuyết vừa cực kỳ quan trọng trong thực tế. Học nguyên tắc không phải để thuộc lòng, mà để tránh kỳ vọng sai về testing.',
        principles: [
            {
                title: '1) Testing shows the presence of defects',
                desc: 'Testing có thể cho thấy defect đang tồn tại, nhưng không thể chứng minh hệ thống hoàn toàn không còn lỗi.'
            },
            {
                title: '2) Exhaustive testing is impossible',
                desc: 'Không thể test mọi tổ hợp input, mọi luồng, mọi môi trường. Vì vậy luôn phải ưu tiên và chọn lọc.'
            },
            {
                title: '3) Early testing saves time and money',
                desc: 'Càng phát hiện sớm thì càng sửa rẻ. Review requirement sớm luôn rẻ hơn fix defect sau release.'
            },
            {
                title: '4) Defects cluster together',
                desc: 'Một số khu vực thường chứa nhiều defect hơn nơi khác. Nơi từng có nhiều lỗi thường đáng được chú ý hơn.'
            },
            {
                title: '5) Beware of the pesticide paradox',
                desc: 'Nếu cứ lặp lại cùng một bộ test, dần dần nó sẽ kém hiệu quả trong việc tìm defect mới. Test cần được làm mới.'
            },
            {
                title: '6) Testing is context dependent',
                desc: 'Không có một cách test tốt nhất cho mọi sản phẩm. App ngân hàng, game, website bán hàng hay embedded system sẽ có ưu tiên khác nhau.'
            },
            {
                title: '7) Absence-of-errors is a fallacy',
                desc: 'Phần mềm có thể “ít lỗi” nhưng vẫn thất bại nếu nó không đáp ứng đúng nhu cầu business hoặc user.'
            }
        ],
        activitiesTitle: '9. Test Activities và Testware',
        activitiesIntro:
            'ISTQB mô tả testing như một chuỗi hoạt động. Mỗi hoạt động đều có mục đích, đầu ra và testware hỗ trợ riêng.',
        activities: [
            {
                title: 'Test Planning',
                desc: 'Xác định scope, objective, strategy, effort, resource, risk, schedule và tiêu chí hoàn thành.'
            },
            {
                title: 'Test Monitoring and Test Control',
                desc: 'Theo dõi tiến độ, độ phủ, defect status, rủi ro còn lại và điều chỉnh kế hoạch khi cần.'
            },
            {
                title: 'Test Analysis',
                desc: 'Phân tích requirement/test basis để xác định test conditions và testable items.'
            },
            {
                title: 'Test Design',
                desc: 'Thiết kế test cases, test data, expected results và coverage cần đạt.'
            },
            {
                title: 'Test Implementation',
                desc: 'Chuẩn bị test procedures, môi trường, dữ liệu và sắp xếp test execution.'
            },
            {
                title: 'Test Execution',
                desc: 'Chạy test, ghi nhận actual result, báo defect, retest, theo dõi status.'
            },
            {
                title: 'Test Completion',
                desc: 'Tổng kết kết quả, đánh giá coverage, residual risk, bài học rút ra và lưu trữ testware.'
            }
        ],
        processVisualTitle: 'Minh hoạ 3 — Chuỗi hoạt động kiểm thử',
        testwareTitle: 'Testware gắn với từng hoạt động',
        testwareIntro:
            'Testware là các artefact được tạo ra, sử dụng hoặc duy trì trong quá trình kiểm thử.',
        testwareBullets: [
            'Planning: test plan, strategy, risk list',
            'Analysis/Design: test conditions, test cases, test data, expected results',
            'Implementation: test procedures, automated scripts, test suites',
            'Execution: execution logs, incident/defect reports',
            'Completion: test summary report, metrics, archived testware',
        ],
        traceabilityTitle: '10. Traceability — Vì sao quan trọng?',
        traceabilityText1:
            'Traceability giúp bạn nhìn được mối liên hệ giữa requirement, risk, test conditions, test cases, execution result và defect. Nó trả lời những câu hỏi như: “Requirement này đã được test chưa?”, “Defect này ảnh hưởng tới yêu cầu nào?”, “Nếu requirement đổi, test case nào phải cập nhật?”.',
        traceabilityText2:
            'Khi hệ thống lớn dần, traceability càng có giá trị vì nó giúp tránh test sót, giúp impact analysis và giúp báo cáo coverage đáng tin cậy hơn.',
        rolesTitle: '11. Vai trò trong kiểm thử',
        rolesIntro:
            'Không phải ở mọi tổ chức, vai trò sẽ được tách biệt giống nhau. Nhưng syllabus muốn bạn hiểu rằng testing có thể có nhiều trách nhiệm khác nhau.',
        roles: [
            {
                title: 'Test Management Role',
                desc: 'Thiên về lập kế hoạch, điều phối, theo dõi, báo cáo, quản lý rủi ro và quyết định test approach.'
            },
            {
                title: 'Testing Role',
                desc: 'Thiên về phân tích, thiết kế, chuẩn bị dữ liệu, thực thi test, đánh giá kết quả, báo defect.'
            },
            {
                title: 'Whole Team Support',
                desc: 'Trong nhiều context hiện đại, dev, BA, PO, automation engineer, ops… đều có thể đóng góp vào testing.'
            }
        ],
        skillsTitle: '12. Kỹ năng & Good Practices trong testing',
        skillsIntro:
            'Tester giỏi không chỉ nhờ tool. Phần lớn giá trị của tester đến từ cách suy nghĩ, cách đặt câu hỏi và cách giao tiếp.',
        skills: [
            'Tư duy phân tích: biết tách bài toán, nhìn điều kiện biên, nhìn rủi ro.',
            'Tư duy phản biện: không vội tin rằng “chạy được là đúng”.',
            'Kỹ năng giao tiếp: viết bug report rõ, hỏi requirement đúng, trao đổi với dev/biz hiệu quả.',
            'Khả năng học nhanh domain và context.',
            'Cẩn thận nhưng không máy móc; biết ưu tiên chỗ quan trọng.',
            'Biết cộng tác với team thay vì coi testing là việc tách rời.',
        ],
        wholeTeamTitle: 'Whole Team Approach',
        wholeTeamText:
            'Testing hiệu quả hơn khi cả team cùng có trách nhiệm với chất lượng, thay vì dồn toàn bộ trách nhiệm cho tester ở cuối quy trình.',
        independenceTitle: 'Independence of Testing',
        independenceText:
            'Testing độc lập có thể giúp góc nhìn khách quan hơn và dễ phát hiện vấn đề hơn. Nhưng nếu tách biệt quá mức, có thể làm giao tiếp chậm hoặc tạo khoảng cách giữa các bên. Vì vậy independence có lợi ích và cũng có trade-off.',
        examFocusTitle: '13. Trọng tâm khi ôn thi chương 1',
        examFocus: [
            'Phân biệt thật chắc: testing vs debugging.',
            'Nhớ rõ: verification vs validation.',
            'Nhớ đúng chuỗi: root cause → error → defect → failure.',
            'Thuộc và hiểu ý nghĩa của 7 testing principles.',
            'Nắm được 7 nhóm test activities và ví dụ testware đi kèm.',
            'Hiểu traceability dùng để làm gì.',
            'Biết whole team approach và independence of testing.',
        ],
        summaryTitle: '14. Tóm tắt nhanh',
        summary: [
            'Testing là một tập hợp hoạt động nhằm phát hiện defect và đánh giá chất lượng, không chỉ là chạy test.',
            'Testing vừa liên quan đến verification, vừa liên quan đến validation.',
            'Testing và debugging khác nhau: một bên phát hiện vấn đề, một bên tìm nguyên nhân và sửa.',
            'Testing là cần thiết vì phần mềm lỗi gây rủi ro cho user, business và uy tín sản phẩm.',
            '7 testing principles là bộ tư duy nền tảng của nghề tester.',
            'Test activities tạo ra testware, và traceability giúp nối các phần đó lại với nhau.',
            'Kỹ năng phân tích, giao tiếp và cộng tác quan trọng không kém tool.',
        ],
        backToHub: 'Quay lại trang ISTQB',
        nextChapter: 'Đi tới Chương 2',
    },
    en: {
        title: 'Chapter 1 — Fundamentals of Testing',
        shortTitle: 'Fundamentals of Testing',
        breadcrumbHome: 'Knowledge Summary',
        breadcrumbHub: 'ISTQB Foundation Level',
        studyTimeLabel: 'Minimum study time',
        studyTimeValue: '180 minutes',
        intro:
            'This is the foundational chapter of the whole ISTQB Foundation Level syllabus. If you understand this chapter well, the later chapters become much easier because almost every core concept starts here: what testing is, why testing is needed, how testing differs from debugging, the seven testing principles, test activities, testware, traceability, testing roles, and the skills expected from a tester.',
        introNote:
            'The purpose of this page is not to copy the syllabus word for word, but to explain it in a way that is easier to study, easier to review, and closer to practical testing work.',
        tocTitle: 'On this page',
        toc: [
            { id: 'overview', label: '1. Chapter overview' },
            { id: 'what-is-testing', label: '2. What is testing?' },
            { id: 'objectives', label: '3. Test objectives' },
            { id: 'debugging', label: '4. Testing vs Debugging' },
            { id: 'why-necessary', label: '5. Why testing is necessary' },
            { id: 'qa-and-quality', label: '6. Quality and QA' },
            { id: 'error-chain', label: '7. Root cause → Error → Defect → Failure' },
            { id: 'principles', label: '8. The seven testing principles' },
            { id: 'activities', label: '9. Test activities and testware' },
            { id: 'traceability', label: '10. Traceability' },
            { id: 'roles', label: '11. Roles in testing' },
            { id: 'skills', label: '12. Skills and good practices' },
            { id: 'exam-focus', label: '13. Exam focus' },
            { id: 'summary', label: '14. Quick summary' },
        ],
        learningObjectivesTitle: 'Learning Objectives for Chapter 1',
        learningObjectives: [
            'Identify typical test objectives.',
            'Differentiate testing from debugging.',
            'Explain why testing is necessary.',
            'Recall the relation between testing and quality assurance.',
            'Distinguish root cause, error, defect, and failure.',
            'Explain the seven testing principles.',
            'Explain the main test activities and related tasks.',
            'Differentiate the testware that supports those activities.',
            'Explain the value of traceability.',
            'Compare the different roles in testing.',
            'Recognize generic tester skills, the whole team approach, and independence of testing.',
        ],
        keywordTitle: 'Important keywords',
        keywords: [
            'coverage',
            'debugging',
            'defect',
            'error',
            'failure',
            'quality',
            'quality assurance',
            'root cause',
            'test analysis',
            'test basis',
            'test case',
            'test completion',
            'test condition',
            'test control',
            'test data',
            'test design',
            'test execution',
            'test implementation',
            'test monitoring',
            'test object',
            'test objective',
            'test planning',
            'test procedure',
            'test process',
            'test result',
            'testing',
            'testware',
            'traceability',
            'validation',
            'verification',
        ],
        overviewTitle: '1. Chapter overview',
        overviewText1:
            'Chapter 1 answers the most important beginner question: “What is testing, really?” Many people think testing only means opening software, trying features, and checking whether something breaks. In ISTQB, testing is much broader: it is a structured set of activities with objectives, inputs, outputs, artifacts, roles, risk considerations, and strong ties to the software development lifecycle.',
        overviewText2:
            'If you understand this chapter well, later chapters become easier. For example, Chapter 2 discusses testing across SDLCs, but that only makes sense if you already understand the test process. Chapter 4 covers test techniques, but you cannot apply them well if you do not first understand test objectives and test conditions. That is why Chapter 1 is the real foundation.',
        whatIsTestingTitle: '2. What is testing?',
        whatIsTestingText1:
            'In the syllabus, testing is a set of activities used to discover defects and evaluate the quality of software work products. A work product is not only executable software; it can also be a requirement, user story, design, test case, source code, or report. Whenever a work product is being examined through testing, it is treated as a test object.',
        whatIsTestingText2:
            'A common misconception is that testing only means test execution. In reality, execution is only one part. Before execution, testers need to understand requirements, identify test conditions, design test cases, prepare data and environments, and decide how results will be evaluated. After execution, they still need to analyze outcomes, report defects, communicate status, and support completion.',
        whatIsTestingText3:
            'Another misconception is that testing only checks whether software matches specifications. That is only part of the story. Testing includes verification — checking whether the product was built correctly against specifications — and validation — checking whether the right product was built for real user and stakeholder needs.',
        visual1Title: 'Visual 1 — Verification vs Validation',
        verificationTitle: 'Verification',
        verificationDesc:
            'Checks whether the product is built according to requirements, specifications, and design.',
        validationTitle: 'Validation',
        validationDesc:
            'Checks whether the product actually meets stakeholder and user needs in the real operating environment.',
        visual2Title: 'Visual 2 — Dynamic vs Static Testing',
        dynamicTitle: 'Dynamic Testing',
        dynamicDesc:
            'The software is executed. Example: click the payment button, submit data, call an API, compare actual and expected results.',
        staticTitle: 'Static Testing',
        staticDesc:
            'The software is not executed. Example: review requirements, review source code, review test cases, or run static analysis.',
        objectivesTitle: '3. Test Objectives',
        objectivesIntro:
            'Testing does not always have one fixed objective. Objectives change depending on context, test level, risk, SDLC, deadline, and business expectations.',
        objectives: [
            'Evaluate work products such as requirements, user stories, design, and code.',
            'Cause failures and find defects.',
            'Ensure required coverage of a test object.',
            'Reduce the risk of inadequate software quality.',
            'Verify that specified requirements have been fulfilled.',
            'Check compliance with contractual, legal, or regulatory requirements.',
            'Provide information so stakeholders can make informed decisions.',
            'Build confidence in the quality of the test object.',
            'Validate that the test object is complete and works as stakeholders expect.',
        ],
        debuggingTitle: '4. Testing vs Debugging',
        debuggingText1:
            'Testing and debugging are related, but they are not the same activity. Testing is mainly about discovering that a problem exists. Debugging is about finding the cause and fixing it.',
        debuggingText2:
            'A tester can identify the steps to reproduce, the expected result, the actual result, the severity, the environment, and the supporting evidence. But finding the wrong line of code, fixing the logic, and proving the root cause is typically a developer task.',
        testingCardTitle: 'Testing',
        testingCardBullets: [
            'Goal: discover defects and evaluate quality',
            'May be static or dynamic',
            'Produces information for the team and stakeholders',
            'Does not necessarily fix the defect',
        ],
        debuggingCardTitle: 'Debugging',
        debuggingCardBullets: [
            'Goal: identify the root cause and fix it',
            'Usually performed by developers',
            'Investigates logic, code, configuration, and data',
            'Ends with a correction or code fix',
        ],
        whyNecessaryTitle: '5. Why testing is necessary',
        whyNecessaryText1:
            'Software is deeply integrated into daily life. When software fails, the result may be wasted time, lost money, damage to reputation, or in severe cases, even injury or death.',
        whyNecessaryText2:
            'Not every defect is equally severe, but testers must understand that testing is fundamentally a risk-reduction activity. It does not prove software is perfect; it increases the chance of finding important problems before users or the business pay the price.',
        whyNecessaryText3:
            'The earlier testing happens, the earlier problems can be prevented from flowing into later stages. A vague requirement found during review is far cheaper than a requirement misunderstanding found after coding, execution, release, and customer use.',
        qaTitle: '6. Quality and Quality Assurance (QA)',
        qaText1:
            'Many people use testing and QA as if they were identical. They are closely related, but not the same. Testing is one activity that supports quality evaluation and quality control. QA is broader: it includes the process, standards, and preventive practices that reduce the chance of producing poor-quality software in the first place.',
        qaText2:
            'A simple way to remember it: testing often focuses on discovering problems; QA focuses on building systems and processes that make problems less likely to happen.',
        errorChainTitle: '7. Root cause → Error → Defect → Failure',
        errorChainIntro:
            'This chain is a very important exam topic and a very common source of confusion.',
        rootCauseTitle: 'Root Cause',
        rootCauseDesc:
            'The underlying reason. Example: ambiguous requirements, poor communication, lack of review, unrealistic deadlines.',
        errorTitle: 'Error',
        errorDesc:
            'A human mistake. Example: a developer misunderstands a business rule and writes the wrong condition.',
        defectTitle: 'Defect',
        defectDesc:
            'A flaw inside a work product. Example: the code contains an incorrect discount formula.',
        failureTitle: 'Failure',
        failureDesc:
            'When the defect is executed and the system behaves incorrectly. Example: the application calculates the final amount incorrectly.',
        chainExampleTitle: 'Simple example',
        chainExampleText:
            'A business rule is unclear (root cause) → the developer misunderstands it (error) → the wrong calculation logic is implemented (defect) → when a real order is processed, the total becomes incorrect (failure).',
        principlesTitle: '8. The Seven Testing Principles',
        principlesIntro:
            'These principles are both theoretical and practical. They help prevent unrealistic expectations about what testing can and cannot achieve.',
        principles: [
            {
                title: '1) Testing shows the presence of defects',
                desc: 'Testing can reveal that defects exist, but it cannot prove that no defects remain.'
            },
            {
                title: '2) Exhaustive testing is impossible',
                desc: 'You cannot test every input, every path, every environment, and every combination. Prioritization is unavoidable.'
            },
            {
                title: '3) Early testing saves time and money',
                desc: 'Finding issues earlier is usually cheaper than finding them later.'
            },
            {
                title: '4) Defects cluster together',
                desc: 'A small number of areas often contain a large proportion of the defects.'
            },
            {
                title: '5) Beware of the pesticide paradox',
                desc: 'Repeating the same tests again and again makes them less effective for finding new defects; tests must evolve.'
            },
            {
                title: '6) Testing is context dependent',
                desc: 'There is no one best testing approach for every system. Banking software, games, e-commerce, and embedded systems have different priorities.'
            },
            {
                title: '7) Absence-of-errors is a fallacy',
                desc: 'Even software with very few defects can still fail if it does not meet real user or business needs.'
            }
        ],
        activitiesTitle: '9. Test Activities and Testware',
        activitiesIntro:
            'ISTQB presents testing as a sequence of related activities. Each one has a purpose, outputs, and supporting testware.',
        activities: [
            {
                title: 'Test Planning',
                desc: 'Define scope, objectives, strategy, effort, resources, risk, schedule, and completion criteria.'
            },
            {
                title: 'Test Monitoring and Test Control',
                desc: 'Track progress, coverage, defect status, residual risk, and adjust the plan when needed.'
            },
            {
                title: 'Test Analysis',
                desc: 'Study the test basis and identify test conditions and what needs to be tested.'
            },
            {
                title: 'Test Design',
                desc: 'Design test cases, test data, expected results, and coverage goals.'
            },
            {
                title: 'Test Implementation',
                desc: 'Prepare procedures, data, environments, and organize execution.'
            },
            {
                title: 'Test Execution',
                desc: 'Run tests, record actual results, report defects, and support retesting.'
            },
            {
                title: 'Test Completion',
                desc: 'Summarize results, assess coverage and residual risk, record lessons learned, and archive testware.'
            }
        ],
        processVisualTitle: 'Visual 3 — The testing activity flow',
        testwareTitle: 'Testware linked to each activity',
        testwareIntro:
            'Testware includes all artifacts created, used, or maintained during testing.',
        testwareBullets: [
            'Planning: test plan, strategy, risk list',
            'Analysis/Design: test conditions, test cases, test data, expected results',
            'Implementation: test procedures, automated scripts, test suites',
            'Execution: execution logs, incident or defect reports',
            'Completion: summary reports, metrics, archived testware',
        ],
        traceabilityTitle: '10. Traceability — Why it matters',
        traceabilityText1:
            'Traceability lets you see the relationship between requirements, risks, test conditions, test cases, execution results, and defects. It answers questions such as: “Has this requirement been tested?”, “Which defect affects this requirement?”, or “If the requirement changes, which tests must be updated?”',
        traceabilityText2:
            'As systems grow larger, traceability becomes more valuable because it reduces missed testing, supports impact analysis, and improves the credibility of coverage reporting.',
        rolesTitle: '11. Roles in testing',
        rolesIntro:
            'Not every organization separates roles in exactly the same way, but the syllabus expects you to understand that testing responsibilities can be distributed across different perspectives.',
        roles: [
            {
                title: 'Test Management Role',
                desc: 'Focuses on planning, coordinating, monitoring, reporting, risk management, and deciding the test approach.'
            },
            {
                title: 'Testing Role',
                desc: 'Focuses on analysis, design, data preparation, execution, evaluation, and defect reporting.'
            },
            {
                title: 'Whole Team Support',
                desc: 'In many modern teams, developers, analysts, product owners, automation engineers, and operations staff all contribute to testing.'
            }
        ],
        skillsTitle: '12. Skills and Good Practices',
        skillsIntro:
            'A strong tester is not defined by tools alone. Much of a tester’s value comes from thinking, questioning, observing, and communicating effectively.',
        skills: [
            'Analytical thinking: break problems down and identify conditions and risks.',
            'Critical thinking: do not assume that “it runs” means “it is correct”.',
            'Communication: write clear bug reports and discuss requirements effectively.',
            'Ability to learn the business domain and project context quickly.',
            'Attention to detail without becoming mechanical.',
            'Collaboration across the team instead of treating testing as isolated work.',
        ],
        wholeTeamTitle: 'Whole Team Approach',
        wholeTeamText:
            'Testing becomes more effective when the whole team shares responsibility for quality instead of leaving all quality work to the tester at the end.',
        independenceTitle: 'Independence of Testing',
        independenceText:
            'Independent testing can provide a more objective perspective and can help detect issues that others overlook. However, too much separation can slow communication or create distance between roles. Independence has both benefits and trade-offs.',
        examFocusTitle: '13. What to focus on for the exam',
        examFocus: [
            'Know the difference between testing and debugging.',
            'Be clear on verification versus validation.',
            'Remember the sequence: root cause → error → defect → failure.',
            'Understand all seven testing principles, not just their names.',
            'Know the main test activities and example testware.',
            'Understand why traceability is useful.',
            'Remember the whole team approach and independence of testing.',
        ],
        summaryTitle: '14. Quick summary',
        summary: [
            'Testing is a structured set of activities, not only execution.',
            'Testing supports both verification and validation.',
            'Testing detects and evaluates; debugging diagnoses and fixes.',
            'Testing is necessary because software failure creates real business and user risk.',
            'The seven testing principles are core thinking tools for testers.',
            'Test activities generate testware, and traceability connects them.',
            'Human skills such as analysis, communication, and collaboration matter as much as tools.',
        ],
        backToHub: 'Back to ISTQB hub',
        nextChapter: 'Go to Chapter 2',
    },
    kr: {} as never,
} as const;

const resolveLocaleContent = (locale: string) => {
    const key = getLocale(locale);
    if (key === 'vi') return content.vi;
    if (key === 'en') return content.en;
    return content.en;
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ locale: string }>;
}) => {
    const { locale } = await params;
    const c = resolveLocaleContent(locale);

    return customGenerateMetadata({
        PATH: '/knowledge/istqb/chapter-1-fundamentals-of-testing',
        TITLE: c.shortTitle,
        LABEL_KEY: '',
    });
};

export default async function Chapter1FundamentalsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const c = resolveLocaleContent(locale);

    return (
        <div className="w-full max-w-5xl py-12">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-black/50">
                <Link href="/knowledge" className="transition hover:text-black">
                    {c.breadcrumbHome}
                </Link>
                <span>/</span>
                <Link href="/knowledge/istqb" className="transition hover:text-black">
                    {c.breadcrumbHub}
                </Link>
                <span>/</span>
                <span className="text-black">{c.shortTitle}</span>
            </div>

            <header className="rounded-3xl border border-black/10 bg-gradient-to-br from-white to-black/[0.02] p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-black/50">
                    <span>{c.studyTimeLabel}</span>
                    <span>•</span>
                    <span>{c.studyTimeValue}</span>
                </div>

                <h1 className="max-w-3xl text-3xl font-semibold leading-tight">
                    {c.title}
                </h1>

                <p className="mt-4 max-w-4xl leading-8 text-black/65">{c.intro}</p>
                <p className="mt-3 max-w-4xl rounded-2xl bg-black/[0.03] p-4 text-sm leading-7 text-black/60">
                    {c.introNote}
                </p>
            </header>

            <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
                <aside className="self-start rounded-2xl border border-black/10 p-5 lg:sticky lg:top-24">
                    <h2 className="mb-4 text-sm font-semibold">{c.tocTitle}</h2>
                    <ul className="space-y-2 text-sm text-black/60">
                        {c.toc.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="transition hover:text-black">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="space-y-8">
                    <section id="overview" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.overviewTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.overviewText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.overviewText2}</p>

                        <div className="mt-6 rounded-2xl bg-black/[0.02] p-5">
                            <h3 className="text-lg font-semibold">{c.learningObjectivesTitle}</h3>
                            <ul className="mt-4 space-y-3 pl-5 text-black/70">
                                {c.learningObjectives.map((item) => (
                                    <li key={item} className="list-disc leading-7">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold">{c.keywordTitle}</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {c.keywords.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        id="what-is-testing"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.whatIsTestingTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.whatIsTestingText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.whatIsTestingText2}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.whatIsTestingText3}</p>

                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-black/10 p-5">
                                <h3 className="mb-3 text-lg font-semibold">{c.visual1Title}</h3>
                                <div className="grid gap-3">
                                    <div className="rounded-xl bg-black/[0.03] p-4">
                                        <h4 className="font-semibold">{c.verificationTitle}</h4>
                                        <p className="mt-2 text-sm leading-7 text-black/65">
                                            {c.verificationDesc}
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-black/[0.03] p-4">
                                        <h4 className="font-semibold">{c.validationTitle}</h4>
                                        <p className="mt-2 text-sm leading-7 text-black/65">
                                            {c.validationDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-black/10 p-5">
                                <h3 className="mb-3 text-lg font-semibold">{c.visual2Title}</h3>
                                <div className="grid gap-3">
                                    <div className="rounded-xl bg-black/[0.03] p-4">
                                        <h4 className="font-semibold">{c.dynamicTitle}</h4>
                                        <p className="mt-2 text-sm leading-7 text-black/65">
                                            {c.dynamicDesc}
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-black/[0.03] p-4">
                                        <h4 className="font-semibold">{c.staticTitle}</h4>
                                        <p className="mt-2 text-sm leading-7 text-black/65">
                                            {c.staticDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="objectives" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.objectivesTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.objectivesIntro}</p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {c.objectives.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-black/10 bg-black/[0.02] p-4"
                                >
                                    <p className="leading-7 text-black/70">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="debugging" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.debuggingTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.debuggingText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.debuggingText2}</p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-black/10 p-5">
                                <h3 className="text-lg font-semibold">{c.testingCardTitle}</h3>
                                <ul className="mt-4 space-y-3 pl-5 text-black/70">
                                    {c.testingCardBullets.map((item) => (
                                        <li key={item} className="list-disc leading-7">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-black/10 p-5">
                                <h3 className="text-lg font-semibold">{c.debuggingCardTitle}</h3>
                                <ul className="mt-4 space-y-3 pl-5 text-black/70">
                                    {c.debuggingCardBullets.map((item) => (
                                        <li key={item} className="list-disc leading-7">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section
                        id="why-necessary"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.whyNecessaryTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.whyNecessaryText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.whyNecessaryText2}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.whyNecessaryText3}</p>
                    </section>

                    <section
                        id="qa-and-quality"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.qaTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.qaText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.qaText2}</p>
                    </section>

                    <section
                        id="error-chain"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.errorChainTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.errorChainIntro}</p>

                        <div className="mt-6 grid gap-4 lg:grid-cols-4">
                            {[
                                { title: c.rootCauseTitle, desc: c.rootCauseDesc },
                                { title: c.errorTitle, desc: c.errorDesc },
                                { title: c.defectTitle, desc: c.defectDesc },
                                { title: c.failureTitle, desc: c.failureDesc },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    className="relative rounded-2xl border border-black/10 bg-black/[0.02] p-4"
                                >
                                    <div className="text-sm font-semibold text-black/40">
                                        {index + 1}
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-black/65">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl bg-black/[0.03] p-5">
                            <h3 className="text-lg font-semibold">{c.chainExampleTitle}</h3>
                            <p className="mt-3 leading-8 text-black/65">{c.chainExampleText}</p>
                        </div>
                    </section>

                    <section id="principles" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.principlesTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.principlesIntro}</p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {c.principles.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-black/10 bg-black/[0.02] p-5"
                                >
                                    <h3 className="text-lg font-semibold leading-7">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-black/65">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="activities" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.activitiesTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.activitiesIntro}</p>

                        <div className="mt-6 rounded-2xl border border-dashed border-black/10 p-5">
                            <h3 className="mb-4 text-lg font-semibold">{c.processVisualTitle}</h3>

                            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                                {c.activities.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-xl border border-black/10 bg-white p-4"
                                    >
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="mt-2 text-sm leading-7 text-black/65">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl bg-black/[0.03] p-5">
                            <h3 className="text-lg font-semibold">{c.testwareTitle}</h3>
                            <p className="mt-3 leading-8 text-black/65">{c.testwareIntro}</p>
                            <ul className="mt-4 space-y-3 pl-5 text-black/70">
                                {c.testwareBullets.map((item) => (
                                    <li key={item} className="list-disc leading-7">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section
                        id="traceability"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.traceabilityTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.traceabilityText1}</p>
                        <p className="mt-4 leading-8 text-black/65">{c.traceabilityText2}</p>
                    </section>

                    <section id="roles" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.rolesTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.rolesIntro}</p>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {c.roles.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-black/10 bg-black/[0.02] p-5"
                                >
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-black/65">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="skills" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.skillsTitle}</h2>
                        <p className="mt-4 leading-8 text-black/65">{c.skillsIntro}</p>

                        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-2xl bg-black/[0.03] p-5">
                                <ul className="space-y-3 pl-5 text-black/70">
                                    {c.skills.map((item) => (
                                        <li key={item} className="list-disc leading-7">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl border border-black/10 p-5">
                                    <h3 className="text-lg font-semibold">{c.wholeTeamTitle}</h3>
                                    <p className="mt-3 text-sm leading-7 text-black/65">
                                        {c.wholeTeamText}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-black/10 p-5">
                                    <h3 className="text-lg font-semibold">{c.independenceTitle}</h3>
                                    <p className="mt-3 text-sm leading-7 text-black/65">
                                        {c.independenceText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        id="exam-focus"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{c.examFocusTitle}</h2>
                        <ul className="mt-4 space-y-3 pl-5 text-black/70">
                            {c.examFocus.map((item) => (
                                <li key={item} className="list-disc leading-7">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="summary" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{c.summaryTitle}</h2>
                        <ul className="mt-4 space-y-3 pl-5 text-black/70">
                            {c.summary.map((item) => (
                                <li key={item} className="list-disc leading-7">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
                        <Link
                            href="/knowledge/istqb"
                            className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
                        >
                            ← {c.backToHub}
                        </Link>

                        <Link
                            href="/knowledge/istqb/chapter-2-testing-throughout-the-sdlc"
                            className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
                        >
                            {c.nextChapter} →
                        </Link>
                    </nav>
                </div>
            </div>

            <PageLinks exclude="/knowledge" />
        </div>
    );
}