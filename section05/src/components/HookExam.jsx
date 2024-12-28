import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
// 2. 조건부로는 호출될 수 없다.
// 3. 나만의 훅을 직접 만들 수 있다. (custom hook)

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      {input}
    </div>
  );
};

export default HookExam;
