import Link from 'next/link';
import PropTypes from 'prop-types';
import { Badge } from 'components/UI/Badge';
import { SCard, SImage, SContent, SInfo, SDate, STagsList } from './Card.styles';

const Card = ({ path, title, description, tags, date, cover }) => {
  return (
    <SCard>
      {cover && <SImage src={cover} width="480" height="240" alt={`Project ${title} cover`} />}
      <SContent>
        {path ? (
          <Link href={path}>
            <a style={{ textDecoration: 'underline' }}>
              <h2>{title}</h2>
            </a>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <p>{description}</p>
        <SInfo>
          <SDate>{new Date(date).toLocaleDateString()}</SDate>
          {tags && (
            <STagsList>
              {tags.map((tag) => (
                <Badge as="li" key={tag}>
                  {tag}
                </Badge>
              ))}
            </STagsList>
          )}
        </SInfo>
      </SContent>
    </SCard>
  );
};

Card.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cover: PropTypes.string,
};

export default Card;
