import { z } from "zod";

export const betaFormSchema = z.object({
  userType: z.enum(["parent", "student"], {
    error: "학부모/학생 구분을 선택해주세요.",
  }),
  grade: z.string().min(1, "학년을 선택해주세요."),
  isInternationalSchool: z.enum(["yes", "no"], {
    error: "해당 여부를 선택해주세요.",
  }),
  biggestChallenge: z.string().min(5, "5자 이상 입력해주세요."),
  vocabularyProblem: z.enum(["yes", "no", "unsure"], {
    error: "공감 여부를 선택해주세요.",
  }),
  betaIntent: z.enum(["yes", "maybe", "no"], {
    error: "참여 의사를 선택해주세요.",
  }),
  priceAcceptable: z.enum(["yes", "lower", "consult"], {
    error: "가격 의향을 선택해주세요.",
  }),
  preferredPrice: z.enum(["free", "under50k", "under100k", "over100k"], {
    error: "적정 가격대를 선택해주세요.",
  }),
  reportItems: z.array(z.string()).min(1, "1개 이상 선택해주세요."),
  contact: z.string().min(1, "연락처 또는 이메일을 입력해주세요."),
});

export type BetaFormValues = z.infer<typeof betaFormSchema>;
