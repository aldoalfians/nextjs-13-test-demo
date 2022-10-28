import { PrismaClient } from "@prisma/client";
import IssuesList from "../../components/issues/IssuesList";
import classes from "./layout.module.css";

async function IssuesLayout({ children }) {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();
  console.log(issues);
  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  );
}

export default IssuesLayout;
