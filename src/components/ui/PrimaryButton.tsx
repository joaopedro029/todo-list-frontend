type propsPrimaryButton = {
  icon?: string;
  name: string;
  verticalPaddingPx: number;
  horizontalPaddingPx: number;
};

export function PrimaryButton({
  icon,
  name,
  verticalPaddingPx,
  horizontalPaddingPx,
}: propsPrimaryButton) {
  return (
    <button
      style={{ padding: `${verticalPaddingPx}px ${horizontalPaddingPx}px` }}
      className={`bg-primary rounded-lg text-[14px] text-white ease-linear hover:bg-primary/95 cursor-pointer`}
    >
      {name}
    </button>
  );
}
