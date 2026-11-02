export function EmptyCardActivity() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full md:max-w-76 rounded-xl border-2 border-dashed border-[#CBD5E1] p-6">
      <div className="bg-[#F1F5F9] text-[#64748B] rounded-full h-12 w-12 flex justify-center items-center cursor-pointer hover:bg-[#eaeef3]">
        +
      </div>
      <h3 className="text-[#1E293B] text-[16px] font-semibold">
        Nova categoria
      </h3>
      <p className="text-[#64748B] text-[12px] leading-[19.5px] text-center">
        Crie um novo espaço para gerenciar objetivos diários.
      </p>
    </div>
  );
}
