"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { betaFormSchema, type BetaFormValues } from "@/features/beta/betaFormSchema";
import {
  form,
  fieldGroup,
  label,
  required,
  radioGroup,
  radioItem,
  checkboxGroup,
  checkboxItem,
  select,
  textarea,
  input,
  errorMessage,
  submitButton,
} from "@/features/beta/beta.css";

const REPORT_OPTIONS = [
  { value: "vocabulary", label: "자주 모르는 영어 수학 용어" },
  { value: "pattern", label: "자주 막히는 문장 패턴" },
  { value: "concept", label: "개념 부족 여부" },
  { value: "recommendation", label: "다음 학습 추천" },
];

export function BetaForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BetaFormValues>({
    resolver: zodResolver(betaFormSchema),
    defaultValues: { reportItems: [] },
  });

  const onSubmit = async (data: BetaFormValues) => {
    console.log("베타 신청 데이터:", data);
    router.push("/pricing");
  };

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* 학부모/학생 구분 */}
      <div className={fieldGroup}>
        <p className={label}>신청자 구분 <span className={required}>*</span></p>
        <div className={radioGroup}>
          {[{ value: "parent", label: "학부모" }, { value: "student", label: "학생" }].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("userType")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.userType && <p className={errorMessage}>{errors.userType.message}</p>}
      </div>

      {/* 학생 학년 */}
      <div className={fieldGroup}>
        <label htmlFor="grade" className={label}>
          학생 학년 <span className={required}>*</span>
        </label>
        <select id="grade" className={select} {...register("grade")}>
          <option value="">학년 선택</option>
          {["초등 1학년", "초등 2학년", "초등 3학년", "초등 4학년", "초등 5학년", "초등 6학년",
            "중학교 1학년", "중학교 2학년", "중학교 3학년"].map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        {errors.grade && <p className={errorMessage}>{errors.grade.message}</p>}
      </div>

      {/* 국제학교/영어 수학 학습 여부 */}
      <div className={fieldGroup}>
        <p className={label}>국제학교 재학 또는 영어 수학 학습 중이신가요? <span className={required}>*</span></p>
        <div className={radioGroup}>
          {[{ value: "yes", label: "예" }, { value: "no", label: "아니오" }].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("isInternationalSchool")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.isInternationalSchool && <p className={errorMessage}>{errors.isInternationalSchool.message}</p>}
      </div>

      {/* 가장 큰 어려움 */}
      <div className={fieldGroup}>
        <label htmlFor="biggestChallenge" className={label}>
          영어 수학에서 가장 큰 어려움은 무엇인가요? <span className={required}>*</span>
        </label>
        <textarea
          id="biggestChallenge"
          className={textarea}
          placeholder="자유롭게 적어주세요."
          {...register("biggestChallenge")}
        />
        {errors.biggestChallenge && <p className={errorMessage}>{errors.biggestChallenge.message}</p>}
      </div>

      {/* 영어 수학 용어 문제 공감 여부 */}
      <div className={fieldGroup}>
        <p className={label}>
          &quot;수학은 아는데 영어 표현을 몰라서 틀린다&quot;는 말에 공감하시나요?
          <span className={required}> *</span>
        </p>
        <div className={radioGroup}>
          {[{ value: "yes", label: "공감한다" }, { value: "no", label: "공감하지 않는다" }, { value: "unsure", label: "잘 모르겠다" }].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("vocabularyProblem")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.vocabularyProblem && <p className={errorMessage}>{errors.vocabularyProblem.message}</p>}
      </div>

      {/* 베타 참여 의사 */}
      <div className={fieldGroup}>
        <p className={label}>너드수학 베타 프로그램에 참여 의사가 있으신가요? <span className={required}>*</span></p>
        <div className={radioGroup}>
          {[{ value: "yes", label: "있다" }, { value: "maybe", label: "조건에 따라 다르다" }, { value: "no", label: "없다" }].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("betaIntent")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.betaIntent && <p className={errorMessage}>{errors.betaIntent.message}</p>}
      </div>

      {/* 가격 수용 가능 여부 */}
      <div className={fieldGroup}>
        <p className={label}>베타 참여권(49,000원) 가격에 대해 어떻게 생각하시나요? <span className={required}>*</span></p>
        <div className={radioGroup}>
          {[
            { value: "yes", label: "이 가격이면 참여 의사 있음" },
            { value: "lower", label: "더 낮은 가격이면 고려" },
            { value: "consult", label: "상담 후 결정" },
          ].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("priceAcceptable")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.priceAcceptable && <p className={errorMessage}>{errors.priceAcceptable.message}</p>}
      </div>

      {/* 적정 가격대 */}
      <div className={fieldGroup}>
        <p className={label}>적정하다고 생각하는 월 가격대는? <span className={required}>*</span></p>
        <div className={radioGroup}>
          {[
            { value: "free", label: "무료여야 한다" },
            { value: "under50k", label: "5만원 미만" },
            { value: "under100k", label: "5만원 ~ 10만원" },
            { value: "over100k", label: "10만원 이상도 괜찮다" },
          ].map((opt) => (
            <label key={opt.value} className={radioItem}>
              <input type="radio" value={opt.value} {...register("preferredPrice")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.preferredPrice && <p className={errorMessage}>{errors.preferredPrice.message}</p>}
      </div>

      {/* 학부모 리포트에서 보고 싶은 항목 */}
      <div className={fieldGroup}>
        <p className={label}>학부모 리포트에서 보고 싶은 항목을 선택해주세요. (복수 선택 가능) <span className={required}>*</span></p>
        <div className={checkboxGroup}>
          {REPORT_OPTIONS.map((opt) => (
            <label key={opt.value} className={checkboxItem}>
              <input type="checkbox" value={opt.value} {...register("reportItems")} />
              {opt.label}
            </label>
          ))}
        </div>
        {errors.reportItems && <p className={errorMessage}>{errors.reportItems.message}</p>}
      </div>

      {/* 연락처 또는 이메일 */}
      <div className={fieldGroup}>
        <label htmlFor="contact" className={label}>
          연락처 또는 이메일 <span className={required}>*</span>
        </label>
        <input
          id="contact"
          type="text"
          className={input}
          placeholder="이메일 또는 전화번호"
          {...register("contact")}
        />
        {errors.contact && <p className={errorMessage}>{errors.contact.message}</p>}
      </div>

      <button type="submit" className={submitButton} disabled={isSubmitting}>
        {isSubmitting ? "제출 중..." : "신청하기"}
      </button>
    </form>
  );
}
