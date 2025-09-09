import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Href } from "expo-router";

export type NavButtonProps = {
  title: string;
  to: Href;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export default function NavButton({ title, to }: NavButtonProps) {
  const router = useRouter();
  return <Button onPress={() => router.push(to)}>{title}</Button>;
}
