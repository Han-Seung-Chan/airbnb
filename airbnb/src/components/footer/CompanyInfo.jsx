import styled from 'styled-components';

import { companyInfoData } from '../../assets/data/footerData.js';

function CompanyInfo() {
  return (
    <Info>
      {companyInfoData.map((list, idx) => (
        <span key={idx}>{list}</span>
      ))}
    </Info>
  );
}
const Info = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  span {
    display: inline;
    padding: 30px;
  }
`;
export default CompanyInfo;
