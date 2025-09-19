/**
 * 심사 관련 데이터베이스
 * 의약품통합정보시스템 - 심사 관리 모듈
 */

// 심사 관련 민원 데이터
const JUDGMENT_CASES = [
  {
    id: "2024000047",
    productName: "아모테스트정 (1213-1245)",
    company: "한미약품(주)",
    kind: "제조",
    receivedAt: "2024-01-03",
    approvedAt: "2024-04-05",
    status: "심사 완료",
    reviews: [
      { dept:"품질", reviewer:"김철수", request:"2024-01-05", start:"2024-01-07", end:"2024-01-20", status:"완료" },
      { dept:"품질", reviewer:"김은우", request:"2024-01-10", start:"2024-01-11", end:"2024-01-22", status:"완료" },
      { dept:"안유", reviewer:"홍길동", request:"2024-01-05", start:"2024-01-06", end:"2024-01-15", status:"완료" },
      { dept:"GCP", reviewer:"홍길동", request:"2024-01-16", start:"2024-01-17", end:"2024-01-21", status:"완료" },
      { dept:"RMP", reviewer:"이영희", request:"2024-01-08", start:"2024-01-09", end:"2024-01-12", status:"완료" },
      { dept:"RMP", reviewer:"이영희", request:"2024-01-14", start:"2024-01-15", end:"2024-01-18", status:"완료" },
      { dept:"품질", reviewer:"이영희", request:"2024-01-19", start:"2024-01-19", end:"2024-01-20", status:"완료" },
      { dept:"GMP", reviewer:"박민수", request:"2024-01-05", start:"2024-01-06", end:"2024-01-12", status:"완료" },
      { dept:"GMP", reviewer:"박민수", request:"2024-01-14", start:"2024-01-15", end:"2024-01-25", status:"완료" }
    ]
  },
  {
    id: "2024000213",
    productName: "로자탄정 50mg",
    company: "동화약품",
    kind: "수입",
    receivedAt: "2025-02-12",
    approvedAt: "",
    status: "심사 중",
    reviews: [
      { dept:"안유", reviewer:"오지은", request:"2025-02-13", start:"2025-02-14", end:"2025-03-02", status:"완료" },
      { dept:"안유", reviewer:"오지은", request:"2025-03-05", start:"2025-03-06", end:"", status:"진행" },
      { dept:"품질", reviewer:"정해준", request:"2025-02-13", start:"", end:"", status:"대기" },
      { dept:"GCP", reviewer:"최수진", request:"2025-03-01", start:"2025-03-02", end:"2025-03-12", status:"완료" },
      { dept:"안유", reviewer:"최수진", request:"2025-03-14", start:"2025-03-15", end:"2025-03-18", status:"완료" },
      { dept:"GMP", reviewer:"문성현", request:"2025-02-13", start:"2025-02-16", end:"2025-03-10", status:"완료" }
    ]
  },
  {
    id: "2025000301",
    productName: "테라신시럽 100ml",
    company: "녹십자",
    kind: "제조",
    receivedAt: "2025-03-01",
    approvedAt: "2025-04-02",
    status: "심사 완료",
    reviews: [
      { dept:"RMP", reviewer:"이영희", request:"2025-03-03", start:"2025-03-06", end:"2025-03-10", status:"완료" },
      { dept:"RMP", reviewer:"이영희", request:"2025-03-15", start:"2025-03-16", end:"2025-03-18", status:"완료" },
      { dept:"RMP", reviewer:"이영희", request:"2025-03-22", start:"2025-03-23", end:"2025-03-28", status:"완료" },
      { dept:"품질", reviewer:"김철수", request:"2025-03-02", start:"2025-03-03", end:"2025-03-12", status:"완료" },
      { dept:"품질", reviewer:"김은우", request:"2025-03-05", start:"2025-03-06", end:"2025-03-14", status:"완료" },
      { dept:"GCP", reviewer:"최수진", request:"2025-03-05", start:"2025-03-05", end:"2025-03-20", status:"완료" }
    ]
  }
];

// 심사 관련 유틸리티 함수들
const JudgmentUtils = {
  /**
   * 두 날짜 사이의 일수 계산
   * @param {string} startDate - 시작일 (YYYY-MM-DD)
   * @param {string} endDate - 종료일 (YYYY-MM-DD)
   * @returns {number|string} 일수 또는 빈 문자열
   */
  days: function(startDate, endDate) {
    if (!startDate || !endDate) return "";
    const d1 = new Date(startDate);
    const d2 = new Date(endDate);
    return Math.max(0, Math.round((d2 - d1) / 86400000));
  },

  /**
   * 날짜를 YYYY-MM 형식으로 변환
   * @param {string} date - 날짜 문자열
   * @returns {string} YYYY-MM 형식 문자열
   */
  yyyymm: function(date) {
    const x = new Date(date);
    return isNaN(x) ? "" : `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}`;
  },

  /**
   * 모든 심사 데이터를 평면화하여 반환
   * @returns {Array} 평면화된 심사 데이터 배열
   */
  flatRows: function() {
    const out = [];
    for (const c of JUDGMENT_CASES) {
      for (const r of (c.reviews || [])) {
        out.push({ ...r, caseId: c.id, productName: c.productName });
      }
    }
    return out;
  },

  /**
   * ID로 민원 케이스 찾기
   * @param {string} id - 민원 ID
   * @returns {Object|null} 민원 케이스 객체 또는 null
   */
  findCaseById: function(id) {
    return JUDGMENT_CASES.find(c => c.id === id) || null;
  },

  /**
   * 부서별로 데이터 그룹화
   * @param {Array} rows - 심사 데이터 배열
   * @returns {Object} 부서별로 그룹화된 데이터
   */
  groupByDept: function(rows) {
    const groups = {};
    rows.forEach(row => {
      const dept = row.dept;
      if (!groups[dept]) {
        groups[dept] = {
          cnt: 0,
          done: 0,
          durations: []
        };
      }
      groups[dept].cnt++;
      if (row.end) {
        groups[dept].done++;
        const dur = this.days(row.start, row.end);
        if (dur !== "" && !isNaN(dur)) {
          groups[dept].durations.push(dur);
        }
      }
    });
    return groups;
  },

  /**
   * 심사원별로 데이터 그룹화
   * @param {Array} rows - 심사 데이터 배열
   * @returns {Object} 심사원별로 그룹화된 데이터
   */
  groupByReviewer: function(rows) {
    const groups = {};
    rows.forEach(row => {
      const reviewer = row.reviewer;
      if (!groups[reviewer]) {
        groups[reviewer] = {
          cnt: 0,
          done: 0,
          durations: []
        };
      }
      groups[reviewer].cnt++;
      if (row.end) {
        groups[reviewer].done++;
        const dur = this.days(row.start, row.end);
        if (dur !== "" && !isNaN(dur)) {
          groups[reviewer].durations.push(dur);
        }
      }
    });
    return groups;
  },

  /**
   * 월별로 데이터 그룹화
   * @param {Array} rows - 심사 데이터 배열
   * @returns {Object} 월별로 그룹화된 데이터
   */
  groupByMonth: function(rows) {
    const groups = {};
    rows.forEach(row => {
      if (row.end) {
        const month = this.yyyymm(row.end);
        if (month) {
          if (!groups[month]) {
            groups[month] = [];
          }
          groups[month].push(row);
        }
      }
    });
    return groups;
  },

  /**
   * 평균값 계산
   * @param {Array} numbers - 숫자 배열
   * @returns {string} 평균값 (소수점 1자리) 또는 "-"
   */
  average: function(numbers) {
    if (!numbers || numbers.length === 0) return "-";
    const sum = numbers.reduce((a, b) => a + b, 0);
    return (sum / numbers.length).toFixed(1);
  },

  /**
   * 필터링된 민원 케이스 가져오기 (민원 목록용)
   * @param {Object} filters - 필터 조건
   * @returns {Array} 필터링된 민원 케이스 배열
   */
  getFilteredCases: function(filters = {}) {
    const {
      keyword = "",
      kind = "",
      status = ""
    } = filters;

    return JUDGMENT_CASES.filter(caseData => {
      // 키워드 필터 (제품명, 업소명, 접수번호)
      if (keyword) {
        const searchText = [caseData.id, caseData.productName, caseData.company].join(" ").toLowerCase();
        if (!searchText.includes(keyword.toLowerCase())) return false;
      }

      // 제조/수입 필터
      if (kind && caseData.kind !== kind) return false;

      // 민원 상태 필터
      if (status && caseData.status !== status) return false;

      return true;
    });
  },

  /**
   * 필터링된 심사 데이터 가져오기 (심사 상세용)
   * @param {Object} filters - 필터 조건
   * @returns {Array} 필터링된 심사 데이터 배열
   */
  getFilteredRows: function(filters = {}) {
    const {
      keyword = "",
      kind = "",
      status = "",
      dept = "",
      reviewer = "",
      month = "",
      reviewStatus = ""
    } = filters;

    return this.flatRows().filter(row => {
      // 키워드 필터 (제품명, 업소명, 접수번호)
      if (keyword) {
        const searchText = [row.caseId, row.productName, row.company].join(" ").toLowerCase();
        if (!searchText.includes(keyword.toLowerCase())) return false;
      }

      // 제조/수입 필터
      if (kind) {
        const caseData = this.findCaseById(row.caseId);
        if (!caseData || caseData.kind !== kind) return false;
      }

      // 민원 상태 필터
      if (status) {
        const caseData = this.findCaseById(row.caseId);
        if (!caseData || caseData.status !== status) return false;
      }

      // 부서 필터
      if (dept && row.dept !== dept) return false;

      // 심사원 필터
      if (reviewer && row.reviewer !== reviewer) return false;

      // 월 필터
      if (month && row.end) {
        const rowMonth = this.yyyymm(row.end);
        if (rowMonth !== month) return false;
      }

      // 심사 상태 필터
      if (reviewStatus && row.status && !row.status.includes(reviewStatus)) return false;

      return true;
    });
  }
};

// 전역에서 사용할 수 있도록 내보내기
if (typeof module !== 'undefined' && module.exports) {
  // Node.js 환경
  module.exports = {
    JUDGMENT_CASES,
    JudgmentUtils
  };
} else {
  // 브라우저 환경
  window.JUDGMENT_CASES = JUDGMENT_CASES;
  window.JudgmentUtils = JudgmentUtils;
}
