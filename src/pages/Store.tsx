import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';
import { useState } from 'react';

export function Store() {
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const filteredItems = storeItems.filter(
    (item) => selectedGender === 'all' || item.gender === selectedGender
  );
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <h1>Store</h1>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedGender === 'all'}
            onChange={handleGenderChange}
          />
          All
        </label>
        <label className="m-4">
          <input
            type="radio"
            value="Male"
            checked={selectedGender === 'Male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={selectedGender === 'Female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <label className="m-4">
          <input
            type="radio"
            value="Kids"
            checked={selectedGender === 'Kids'}
            onChange={handleGenderChange}
          />
          Kids
        </label>
      </div>

      <Row md={2} xs={1} lg={4} className="g-3">
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
