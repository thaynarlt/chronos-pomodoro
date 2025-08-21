import styles from '../styles/container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
