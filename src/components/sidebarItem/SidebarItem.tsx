import { PolymorphicButton } from "components/polymorphic-button";
import s from "./SidebarItem.module.scss";
export function SidebarItem({
  as,
  label,
  href,
  pathname,
  Component,
  isMobile,
  createPostHandler,
  show,
  t,
}: any) {
  return (
    <PolymorphicButton
      as={as}
      key={label}
      href={href}
      isActive={pathname === href}
      variant="text"
      className={s.item}
      onClick={() => {
        if (label === t("create")) {
          createPostHandler();
        }
        if (label === t("logOut")) {
          show();
        }
      }}
    >
      <Component /> {isMobile ? "" : label}
    </PolymorphicButton>
  );
}
