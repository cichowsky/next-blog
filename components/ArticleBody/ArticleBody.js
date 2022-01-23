import PropTypes from 'prop-types';
import { Badge } from 'components/UI/Badge';
import { SArticle, SInfo, STagsList, SImage, SContent } from './ArticleBody.styles';

const ArticleBody = ({ title, date, tags, description, cover, content }) => {
  return (
    <SArticle>
      <SInfo>
        <h1>{title}</h1>
        <span>{new Date(date).toLocaleDateString()}</span>
      </SInfo>

      {tags && (
        <STagsList>
          {tags.map((tag) => (
            <Badge as="li" key={tag}>
              {tag}
            </Badge>
          ))}
        </STagsList>
      )}

      <p>{description}</p>

      {cover && <SImage src={cover} width="800" height="400" alt={`Project ${title} cover`} />}

      <SContent dangerouslySetInnerHTML={{ __html: content }} />
    </SArticle>
  );
};

ArticleBody.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  cover: PropTypes.string,
  content: PropTypes.string,
};

export default ArticleBody;
