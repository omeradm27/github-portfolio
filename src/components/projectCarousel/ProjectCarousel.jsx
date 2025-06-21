import { Carousel, Typography, Card, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './ProjectCarousel.css';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { Meta } = Card;

const ProjectCarousel = ({ projects }) => {
  const navigate = useNavigate();
  const featured = projects.slice(0, 5);
  const { t } = useTranslation();

  const grouped = [];
  for (let i = 0; i < featured.length; i += 3) {
    grouped.push(featured.slice(i, i + 3));
  }

  const CustomPrevArrow = ({ onClick }) => (
    <div className="carousel-arrow left" onClick={onClick}>
      <LeftOutlined />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="carousel-arrow right" onClick={onClick}>
      <RightOutlined />
    </div>
  );

  return (
    <section className="carousel__section">
      <Title level={2}>{t('PROJECTS_CAROUSEL_TITLE')}</Title>
      <br />
      <Carousel
        dots={true}
        autoplay
        arrows
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        {grouped.map((group, idx) => (
          <div key={idx}>
            <Row gutter={[16, 16]} justify="center">
              {group.map((proj, i) => (
                <Col key={i} xs={22} sm={12} md={8}>
                  <Card
                    hoverable
                    cover={<img alt={proj.title} src={proj.logo} className="carousel__image" />}
                    onClick={() => window.open(proj.live || proj.github, '_blank')}
                  >
                    <Meta title={proj.title} description={proj.period} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
      <div className="carousel__footer">
        <Button type="link" onClick={() => navigate('/projects')}>{t('VIEW_ALL_PROJECTS')} <RightOutlined /></Button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
