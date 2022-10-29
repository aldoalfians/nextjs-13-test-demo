import { PrismaClient } from "@prisma/client";
import IssueDetails from "./IssueDetails";
async function IssuesDetailsPage({ params }) {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: params.issueId },
  });
  return <IssueDetails issue={issue} />;
}

export default IssuesDetailsPage;
