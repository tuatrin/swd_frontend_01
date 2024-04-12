import { Card } from "antd";
import styles from "@/styles/components/HomeCard.module.scss";

interface IHomeCard {
  title: string;
  description: string;
}

export default function HomeCard(props: IHomeCard) {
  const { title, description } = props;

  return (
    <>
      <Card title={title} className={styles.card}>
        <p>{description}</p>
      </Card>
    </>
  );
}
