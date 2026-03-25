'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageLinks } from '@/app/components/PageLinks';

const tabs = [
  { key: 'istqb', label: 'ISTQB' },
  { key: 'korean', label: 'Korean' },
] as const;

const istqbToc = [
  {
    title: '0. Introduction',
    items: [
      '0.1 Purpose of this Syllabus',
      '0.2 The Certified Tester Foundation Level in Software Testing',
      '0.3 Career Path for Testers',
      '0.4 Business Outcomes',
      '0.5 Exam-inable Learning Objectives and Cognitive Level of Knowledge',
      '0.6 The Foundation Level Certificate Exam',
      '0.7 Accreditation',
      '0.8 Handling of Standards',
      '0.9 Staying Current',
      '0.10 Level of Detail',
      '0.11 How this Syllabus is Organized',
    ],
  },
  {
    title: '1. Fundamentals of Testing',
    items: [
      '1.1 What is Testing?',
      '1.1.1 Test Objectives',
      '1.1.2 Testing and Debugging',
      '1.2 Why is Testing Necessary?',
      "1.2.1 Testing's Contributions to Success",
      '1.2.2 Testing and Quality Assurance (QA)',
      '1.2.3 Errors, Defects, Failures, and Root Causes',
      '1.3 Testing Principles',
      '1.4 Test Activities, Testware and Test Roles',
      '1.4.1 Test Activities and Tasks',
      '1.4.2 Test Process in Context',
      '1.4.3 Testware',
      '1.4.4 Traceability between the Test Basis and Testware',
      '1.4.5 Roles in Testing',
      '1.5 Essential Skills and Good Practices in Testing',
      '1.5.1 Generic Skills Required for Testing',
      '1.5.2 Whole Team Approach',
      '1.5.3 Independence of Testing',
    ],
  },
  {
    title: '2. Testing Throughout the Software Development Lifecycle',
    items: [
      '2.1 Testing in the Context of a Software Development Lifecycle (SDLC)',
      '2.1.1 Impact of the Software Development Lifecycle on Testing',
      '2.1.2 Software Development Lifecycle and Good Testing Practices',
      '2.1.3 Testing as a Driver for Software Development',
      '2.1.4 DevOps and Testing',
      '2.1.5 Shift Left',
      '2.1.6 Retrospectives and Process Improvement',
      '2.2 Test Levels and Test Types',
      '2.2.1 Test Levels',
      '2.2.2 Test Types',
      '2.2.3 Confirmation Testing and Regression Testing',
      '2.3 Maintenance Testing',
    ],
  },
  {
    title: '3. Static Testing',
    items: [
      '3.1 Static Testing Basics',
      '3.1.1 Work Products Examineable by Static Testing',
      '3.1.2 Value of Static Testing',
      '3.1.3 Differences between Static Testing and Dynamic Testing',
      '3.2 Feedback and Review Process',
      '3.2.1 Benefits of Early and Frequent Stakeholder Feedback',
      '3.2.2 Review Process Activities',
      '3.2.3 Roles and Responsibilities in Reviews',
      '3.2.4 Review Types',
      '3.2.5 Success Factors for Reviews',
    ],
  },
  {
    title: '4. Test Analysis and Design',
    items: [
      '4.1 Test Techniques Overview',
      '4.2 Black-Box Test Techniques',
      '4.2.1 Equivalence Partitioning',
      '4.2.2 Boundary Value Analysis',
      '4.2.3 Decision Table Testing',
      '4.2.4 State Transition Testing',
      '4.3 White-Box Test Techniques',
      '4.3.1 Statement Testing and Statement Coverage',
      '4.3.2 Branch Testing and Branch Coverage',
      '4.3.3 The Value of White-box Testing',
      '4.4 Experience-based Test Techniques',
      '4.4.1 Error Guessing',
      '4.4.2 Exploratory Testing',
      '4.4.3 Checklist-Based Testing',
      '4.5 Collaboration-based Test Approaches',
      '4.5.1 Collaborative User Story Writing',
      '4.5.2 Acceptance Criteria',
      '4.5.3 Acceptance Test-driven Development (ATDD)',
    ],
  },
  {
    title: '5. Managing the Test Activities',
    items: [
      '5.1 Test Planning',
      '5.1.1 Purpose and Content of a Test Plan',
      "5.1.2 Tester's Contribution to Iteration and Release Planning",
      '5.1.3 Entry Criteria and Exit Criteria',
      '5.1.4 Estimation Techniques',
      '5.1.5 Test Case Prioritization',
      '5.1.6 Test Pyramid',
      '5.1.7 Testing Quadrants',
      '5.2 Risk Management',
      '5.2.1 Risk Definition and Risk Attributes',
      '5.2.2 Project Risks and Product Risks',
      '5.2.3 Product Risk Analysis',
      '5.2.4 Product Risk Control',
      '5.3 Test Monitoring, Test Control and Test Completion',
      '5.3.1 Metrics used in Testing',
      '5.3.2 Purpose, Content and Audience for Test Reports',
      '5.3.3 Communicating the Status of Testing',
      '5.4 Configuration Management',
      '5.5 Defect Management',
    ],
  },
  {
    title: '6. Test Tools',
    items: [
      '6.1 Tool Support for Testing',
      '6.2 Benefits and Risks of Test Automation',
    ],
  },
  {
    title: '7. References',
    items: [],
  },
  {
    title: '8. Appendix A – Learning Objectives / Cognitive Level of Knowledge',
    items: [],
  },
  {
    title: '9. Appendix B – Business Outcomes Traceability Matrix with Learning Objectives',
    items: [],
  },
  {
    title: '10. Appendix C – Release Notes',
    items: [],
  },
  {
    title: '11. Index',
    items: [],
  },
] as const;

const KnowledgePage = () => {
  const [activeTab, setActiveTab] = useState<'istqb' | 'korean'>('istqb');

  return (
    <div className="mx-auto w-full max-w-4xl py-12">
      <div className="mb-10 border-b border-black/10">
        <div className="flex items-center justify-center gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative pb-3 text-base font-medium transition ${
                  isActive ? 'text-black' : 'text-black/50 hover:text-black'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[320px]">
        {activeTab === 'istqb' && (
          <section className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold">ISTQB Foundation Level - Table of Contents</h1>
              <p className="mt-2 text-sm text-black/50">
                Đây là mục lục tổng hợp theo syllabus ISTQB Foundation Level. Sau này mỗi
                chương hoặc mục nhỏ có thể tách thành một trang riêng.
              </p>
            </div>

            <div className="space-y-6">
              {istqbToc.map((chapter) => (
                <div key={chapter.title} className="rounded-xl border border-black/10 p-5">
                  <div className="mb-3">
                    <Link
                      href="#"
                      className="text-lg font-semibold text-black hover:underline"
                    >
                      {chapter.title}
                    </Link>
                  </div>

                  {chapter.items.length > 0 && (
                    <ul className="space-y-2 pl-5 text-sm text-black/70">
                      {chapter.items.map((item) => (
                        <li key={item} className="list-disc">
                          <Link href="#" className="hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'korean' && (
          <section className="space-y-4 text-sm leading-7 text-black/70">
            <h2 className="text-xl font-semibold text-black">Korean</h2>
            <p>
              Đây là nơi mình sẽ ghi lại các kiến thức tiếng Hàn phục vụ công việc,
              bao gồm từ vựng IT, mẫu câu trao đổi trong công việc, cách đọc tài liệu
              và các ghi chú cần thiết.
            </p>
            <p>Nội dung sẽ được mình cập nhật dần trong thời gian tới.</p>
          </section>
        )}
      </div>

      <PageLinks exclude="/knowledge" />
    </div>
  );
};

export default KnowledgePage;