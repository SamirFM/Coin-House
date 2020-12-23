import style from "./Header.style";

export default (title: string): any => ({
  headerTitleAlign: "center",
  headerTitle: title,
  headerStyle: style.headerStyle,
  headerTintColor: "white",
});
