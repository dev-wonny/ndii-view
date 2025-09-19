// 의약품통합정보시스템 - 교육 실적 관리 데이터베이스
const EducationDatabase = {
    // 사용자 데이터
    users: {
        "홍길동": {
            id: "user001",
            userName: "홍길동",
            role: "EDUCATION_MANAGER",
            permissions: ["교육 관리", "교육 이수 현황 조회", "교육 실적 보고서"],
            dept: "신약심사부",
            orgName: "식품의약품안전처",
            email: "hong@mfds.go.kr"
        },
        "김철수": {
            id: "user002", 
            userName: "김철수",
            role: "AUDITOR",
            permissions: ["교육 이수 현황 조회", "교육 실적 보고서"],
            dept: "신약심사부",
            orgName: "식품의약품안전처",
            email: "kim@mfds.go.kr"
        },
        "이영희": {
            id: "user003",
            userName: "이영희", 
            role: "AUDITOR",
            permissions: ["교육 이수 현황 조회", "교육 실적 보고서"],
            dept: "허가총괄부",
            orgName: "식품의약품안전처",
            email: "lee@mfds.go.kr"
        },
        "박선우": {
            id: "user004",
            userName: "박선우",
            role: "AUDITOR", 
            permissions: ["교육 이수 현황 조회", "교육 실적 보고서"],
            dept: "생물의약품부",
            orgName: "식품의약품안전처",
            email: "park@mfds.go.kr"
        },
        "최민준": {
            id: "user005",
            userName: "최민준",
            role: "AUDITOR",
            permissions: ["교육 이수 현황 조회", "교육 실적 보고서"],
            dept: "품질안전부", 
            orgName: "식품의약품안전처",
            email: "choi@mfds.go.kr"
        }
    },

    // 교육과정 데이터
    courses: [
        {
            id: 1,
            name: "신약심사 기본교육",
            desc: "신약심사 업무의 기본 원리와 절차에 대한 교육",
            startDate: "2025-01-15",
            endDate: "2025-01-17",
            type: "필수",
            hours: 24,
            regDate: "2025-01-10",
            dataSource: "API",
            orgName: "식품의약품안전처",
            registrant: "시스템관리자"
        },
        {
            id: 2,
            name: "임상시험 관리 교육",
            desc: "임상시험의 설계, 수행, 모니터링에 대한 종합 교육",
            startDate: "2025-02-01",
            endDate: "2025-02-03",
            type: "필수",
            hours: 20,
            regDate: "2025-01-25",
            dataSource: "API",
            orgName: "식품의약품안전처",
            registrant: "시스템관리자"
        },
        {
            id: 3,
            name: "의료기기 심사 교육",
            desc: "의료기기 심사 기준과 절차에 대한 전문 교육",
            startDate: "2025-02-15",
            endDate: "2025-02-16",
            type: "선택",
            hours: 16,
            regDate: "2025-02-05",
            dataSource: "API",
            orgName: "식품의약품안전처",
            registrant: "시스템관리자"
        },
        {
            id: 4,
            name: "외부 전문가 초청 세미나",
            desc: "국제 의약품 규제 동향 및 최신 기술 세미나",
            startDate: "2025-03-01",
            endDate: "2025-03-01",
            type: "선택",
            hours: 8,
            regDate: "2025-02-20",
            dataSource: "EXTERNAL",
            orgName: "한국의약품안전관리원",
            registrant: "홍길동"
        },
        {
            id: 5,
            name: "생물의약품 심사 교육",
            desc: "생물의약품의 특성과 심사 기준에 대한 전문 교육",
            startDate: "2025-03-10",
            endDate: "2025-03-12",
            type: "필수",
            hours: 18,
            regDate: "2025-02-28",
            dataSource: "API",
            orgName: "식품의약품안전처",
            registrant: "시스템관리자"
        },
        {
            id: 6,
            name: "의약품 안전성 관리 교육",
            desc: "의약품 부작용 모니터링 및 안전성 관리 교육",
            startDate: "2025-03-20",
            endDate: "2025-03-21",
            type: "필수",
            hours: 12,
            regDate: "2025-03-10",
            dataSource: "API",
            orgName: "식품의약품안전처",
            registrant: "시스템관리자"
        },
        {
            id: 7,
            name: "외부 컨퍼런스 참석",
            desc: "국제 의약품 규제 컨퍼런스 참석 및 보고",
            startDate: "2025-04-05",
            endDate: "2025-04-07",
            type: "선택",
            hours: 20,
            regDate: "2025-03-25",
            dataSource: "EXTERNAL",
            orgName: "국제의약품규제협회",
            registrant: "김철수"
        }
    ],

    // 심사자 데이터
    auditors: {
        "홍길동": {
            info: {
                id: "user001",
                name: "홍길동",
                dept: "신약심사부",
                rank: "팀장",
                email: "hong@mfds.go.kr"
            },
            records: [
                {
                    id: "rec001",
                    uniqueId: "row_홍길동_rec001",
                    courseId: 1,
                    date: "2025-01-17",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "홍길동",
                    evidenceFile: "hong_course1_certificate.pdf"
                },
                {
                    id: "rec002",
                    uniqueId: "row_홍길동_rec002", 
                    courseId: 2,
                    date: "2025-02-03",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "홍길동",
                    evidenceFile: "hong_course2_certificate.pdf"
                },
                {
                    id: "rec003",
                    uniqueId: "row_홍길동_rec003",
                    courseId: 4,
                    date: "2025-03-01",
                    approve: "승인",
                    dataSource: "EXTERNAL",
                    registrant: "홍길동",
                    evidenceFile: "hong_seminar_certificate.pdf"
                }
            ]
        },
        "김철수": {
            info: {
                id: "user002",
                name: "김철수",
                dept: "신약심사부",
                rank: "주무관",
                email: "kim@mfds.go.kr"
            },
            records: [
                {
                    id: "rec004",
                    uniqueId: "row_김철수_rec004",
                    courseId: 1,
                    date: "2025-01-17",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "김철수",
                    evidenceFile: "kim_course1_certificate.pdf"
                },
                {
                    id: "rec005",
                    uniqueId: "row_김철수_rec005",
                    courseId: 3,
                    date: "2025-02-16",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "김철수",
                    evidenceFile: "kim_course3_certificate.pdf"
                },
                {
                    id: "rec006",
                    uniqueId: "row_김철수_rec006",
                    courseId: 7,
                    date: "2025-04-07",
                    approve: "승인",
                    dataSource: "EXTERNAL",
                    registrant: "김철수",
                    evidenceFile: "kim_conference_certificate.pdf"
                }
            ]
        },
        "이영희": {
            info: {
                id: "user003",
                name: "이영희",
                dept: "허가총괄부",
                rank: "주무관",
                email: "lee@mfds.go.kr"
            },
            records: [
                {
                    id: "rec007",
                    uniqueId: "row_이영희_rec007",
                    courseId: 2,
                    date: "2025-02-03",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "이영희",
                    evidenceFile: "lee_course2_certificate.pdf"
                },
                {
                    id: "rec008",
                    uniqueId: "row_이영희_rec008",
                    courseId: 5,
                    date: "2025-03-12",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "이영희",
                    evidenceFile: "lee_course5_certificate.pdf"
                },
                {
                    id: "rec009",
                    uniqueId: "row_이영희_rec009",
                    courseId: 6,
                    date: "2025-03-21",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "이영희",
                    evidenceFile: "lee_course6_certificate.pdf"
                }
            ]
        },
        "박선우": {
            info: {
                id: "user004",
                name: "박선우",
                dept: "생물의약품부",
                rank: "주무관",
                email: "park@mfds.go.kr"
            },
            records: [
                {
                    id: "rec010",
                    uniqueId: "row_박선우_rec010",
                    courseId: 1,
                    date: "2025-01-17",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "박선우",
                    evidenceFile: "park_course1_certificate.pdf"
                },
                {
                    id: "rec011",
                    uniqueId: "row_박선우_rec011",
                    courseId: 5,
                    date: "2025-03-12",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "박선우",
                    evidenceFile: "park_course5_certificate.pdf"
                },
                {
                    id: "rec012",
                    uniqueId: "row_박선우_rec012",
                    courseId: 3,
                    date: "2025-02-16",
                    approve: "승인대기",
                    dataSource: "EXTERNAL",
                    registrant: "박선우",
                    evidenceFile: "park_course3_certificate.pdf"
                }
            ]
        },
        "최민준": {
            info: {
                id: "user005",
                name: "최민준",
                dept: "품질안전부",
                rank: "주무관",
                email: "choi@mfds.go.kr"
            },
            records: [
                {
                    id: "rec013",
                    uniqueId: "row_최민준_rec013",
                    courseId: 2,
                    date: "2025-02-03",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "최민준",
                    evidenceFile: "choi_course2_certificate.pdf"
                },
                {
                    id: "rec014",
                    uniqueId: "row_최민준_rec014",
                    courseId: 6,
                    date: "2025-03-21",
                    approve: "승인",
                    dataSource: "API",
                    registrant: "최민준",
                    evidenceFile: "choi_course6_certificate.pdf"
                },
                {
                    id: "rec015",
                    uniqueId: "row_최민준_rec015",
                    courseId: 4,
                    date: "2025-03-01",
                    approve: "반려",
                    dataSource: "EXTERNAL",
                    registrant: "최민준",
                    evidenceFile: "choi_seminar_certificate.pdf"
                }
            ]
        }
    },

    // 부서 목록
    departments: [
        "신약심사부",
        "허가총괄부", 
        "생물의약품부",
        "품질안전부",
        "임상정책부"
    ],

    // 교육과정 타입
    courseTypes: [
        "필수",
        "선택"
    ],

    // 데이터 소스 타입
    dataSources: [
        "API",
        "EXTERNAL"
    ],

    // 승인 상태
    approvalStatuses: [
        "승인",
        "승인대기",
        "반려"
    ],

    // 통계 데이터 생성 함수
    generateStats: function() {
        const stats = {
            totalCourses: this.courses.length,
            totalAuditors: Object.keys(this.auditors).length,
            totalRecords: 0,
            approvedRecords: 0,
            pendingRecords: 0,
            rejectedRecords: 0,
            departmentStats: {}
        };

        // 부서별 통계 초기화
        this.departments.forEach(dept => {
            stats.departmentStats[dept] = {
                totalRecords: 0,
                approvedRecords: 0,
                pendingRecords: 0,
                rejectedRecords: 0,
                totalHours: 0
            };
        });

        // 전체 기록 통계 계산
        Object.values(this.auditors).forEach(auditor => {
            if (auditor.records) {
                auditor.records.forEach(record => {
                    stats.totalRecords++;
                    
                    const course = this.courses.find(c => c.id === record.courseId);
                    const dept = auditor.info.dept;
                    
                    if (dept && stats.departmentStats[dept]) {
                        stats.departmentStats[dept].totalRecords++;
                        if (course) {
                            stats.departmentStats[dept].totalHours += course.hours || 0;
                        }
                    }

                    switch(record.approve) {
                        case '승인':
                            stats.approvedRecords++;
                            if (dept && stats.departmentStats[dept]) {
                                stats.departmentStats[dept].approvedRecords++;
                            }
                            break;
                        case '승인대기':
                            stats.pendingRecords++;
                            if (dept && stats.departmentStats[dept]) {
                                stats.departmentStats[dept].pendingRecords++;
                            }
                            break;
                        case '반려':
                            stats.rejectedRecords++;
                            if (dept && stats.departmentStats[dept]) {
                                stats.departmentStats[dept].rejectedRecords++;
                            }
                            break;
                    }
                });
            }
        });

        return stats;
    },

    // 데이터 검증 함수
    validateData: function() {
        const errors = [];
        
        // 교육과정 데이터 검증
        this.courses.forEach((course, index) => {
            if (!course.id || !course.name) {
                errors.push(`교육과정 ${index + 1}: ID 또는 이름이 없습니다.`);
            }
            if (!course.startDate || !course.endDate) {
                errors.push(`교육과정 ${course.name}: 시작일 또는 종료일이 없습니다.`);
            }
        });

        // 심사자 데이터 검증
        Object.entries(this.auditors).forEach(([name, auditor]) => {
            if (!auditor.info || !auditor.info.name) {
                errors.push(`심사자 ${name}: 기본 정보가 없습니다.`);
            }
            if (auditor.records) {
                auditor.records.forEach((record, index) => {
                    if (!record.courseId || !record.date) {
                        errors.push(`심사자 ${name} 기록 ${index + 1}: 교육과정 ID 또는 날짜가 없습니다.`);
                    }
                });
            }
        });

        return errors;
    },
    
    // API 동기화용 이수 기록 데이터
    apiRecords: [
        {
            id: 100,
            auditorName: '홍길동',
            dept: '신약심사부',
            rank: '심사원',
            courseId: 1,
            courseName: '개인정보보호 및 정보보안 교육',
            completionDate: '2025-02-15',
            status: '완료',
            dataSource: 'API',
            registrant: '홍길동'
        },
        {
            id: 101,
            auditorName: '김철수',
            dept: '허가총괄부',
            rank: '주무관',
            courseId: 2,
            courseName: '의약품 GMP 기본 과정',
            completionDate: '2025-04-20',
            status: '완료',
            dataSource: 'API',
            registrant: '김철수'
        },
        {
            id: 102,
            auditorName: '이영희',
            dept: '신약심사부',
            rank: '연구관',
            courseId: 3,
            courseName: '2025년 신약 허가·심사 워크숍',
            completionDate: '2025-07-16',
            status: '완료',
            dataSource: 'API',
            registrant: '이영희'
        },
        {
            id: 103,
            auditorName: '박선우',
            dept: '생물의약품부',
            rank: '선임연구관',
            courseId: 4,
            courseName: '바이오의약품 심사 가이드라인',
            completionDate: '2025-08-05',
            status: '완료',
            dataSource: 'API',
            registrant: '박선우'
        },
        {
            id: 104,
            auditorName: '최민준',
            dept: '신약심사부',
            rank: '심사원',
            courseId: 5,
            courseName: '의약품 통계 분석 심화',
            completionDate: '2025-10-21',
            status: '완료',
            dataSource: 'API',
            registrant: '최민준'
        },
        {
            id: 105,
            auditorName: '정수진',
            dept: '품질안전부',
            rank: '주무관',
            courseId: 6,
            courseName: '의약품 부작용 보고 시스템',
            completionDate: '2025-03-10',
            status: '완료',
            dataSource: 'API',
            registrant: '정수진'
        },
        {
            id: 106,
            auditorName: '한지민',
            dept: '품질안전부',
            rank: '심사원',
            courseId: 7,
            courseName: '임상시험 윤리 및 규정',
            completionDate: '2025-05-15',
            status: '완료',
            dataSource: 'API',
            registrant: '한지민'
        },
        {
            id: 107,
            auditorName: '송민호',
            dept: '임상정책부',
            rank: '연구관',
            courseId: 8,
            courseName: '의약품 품질관리 실무',
            completionDate: '2025-06-05',
            status: '완료',
            dataSource: 'API',
            registrant: '송민호'
        }
    ]
};

// 데이터베이스 내보내기 (Node.js 환경에서 사용)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationDatabase;
}

// 브라우저 환경에서 전역 변수로 설정
if (typeof window !== 'undefined') {
    window.EducationDatabase = EducationDatabase;
}
