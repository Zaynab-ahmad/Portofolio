interface SecTitleProp {
  title: string;
  description: string;
}
function SecTitle({ title, description }: SecTitleProp) {
  return (
    <div className="mx-auto text-center lg:w-1/3 w-full pb-[60px] ">
      <h3 className="text-[34px] font-extrabold text-black pb-2.5">{title}</h3>
      <p className="text-sm/[24px] text-foreground font-plex">{description}</p>
    </div>
  );
}

export default SecTitle
