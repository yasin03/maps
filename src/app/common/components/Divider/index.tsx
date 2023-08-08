interface Props {
  variant?: "horizontal" | "vertical"; // Varyant olarak "horizontal" (yatay) veya "vertical" (dikey) seçeneklerini ekliyoruz
}

const Divider = ({ variant = "vertical" }: Props) => {
  return (
    <div
      className={`flex ${
        variant === "vertical" ? "h-px" : "w-px h-full"
      } bg-black/[0.12]`}
    ></div>
  );
};

export default Divider;
