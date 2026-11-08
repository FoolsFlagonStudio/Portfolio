import { useParams } from 'react-router-dom';
import CaseStudyPage from '../case-study/CaseStudyPage';
import { caseStudies } from '../content/projects';
import NotFound from './NotFound';

export default function CaseStudyRoute() {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return <NotFound />;
  return <CaseStudyPage key={study.slug} study={study} />;
}
