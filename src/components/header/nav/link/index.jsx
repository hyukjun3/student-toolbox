import styles from "./style.module.scss";
import Link from "next/link";

import PropTypes from "prop-types";

export default function Index({ data }) {
  Index.propTypes = {
    data: PropTypes.object.isRequired,
  };
  return (
    <div className={styles.link}>
      <Link href={data.href}>{data.title}</Link>
    </div>
  );
}
