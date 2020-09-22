import * as React from 'react';
import * as ReactRedux from 'react-redux';

import styled from 'styled-components';

import * as AppStateOrganization from '~client/app/store/organization';
import * as EntitiesMembers from '~client/app/store/entities/members';

import * as Members from './members';

type Props = {
  team: AppStateOrganization.State['tree'][number];
};

export const Component = (props: Props) => {
  const members = ReactRedux.useSelector(
    EntitiesMembers.teamsMemberSelector(props.team.id),
    ReactRedux.shallowEqual
  );

  return (
    <StyledTeamContainer>
      <div>
        <StyledTeam>
          <StyledHeading>{props.team.name}</StyledHeading>
          <Members.Component members={members} />
        </StyledTeam>
      </div>

      <StyledChildTeam>
        {props.team.children.map((team) => (
          <Component key={team.id} team={team} />
        ))}
      </StyledChildTeam>
    </StyledTeamContainer>
  );
};

const StyledTeamContainer = styled.div`
  display: flex;
`;

const StyledTeam = styled.div`
  cursor: move;
  width: 300px;

  &.isDragging {
    opacity: 0;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const StyledChildTeam = styled.div`
  /* display: flex; */
`;

// import * as React from 'react';
// import * as ReactDnD from 'react-dnd';

// import styled from 'styled-components';

// import * as Members from './members';

// import { mockData } from './mock-data';
// import * as OrganizationEntity from '~client/app/application/organization/entity';

// type Props = typeof mockData[number] & {
//   index: number;
//   moveTeam: (dragIndex: number, hoverIndex: number) => void;
// };

// type DragItem = {
//   index: Props['index'];
//   id: Props['teamName'];
//   type: typeof OrganizationEntity.itemTypes.team;
// };

// export const Component = (props: Props) => {
//   const ref = React.useRef<HTMLDivElement>(null);

//   const [{ isDragging }, refDrag] = ReactDnD.useDrag({
//     item: {
//       type: OrganizationEntity.itemTypes.team,
//       id: props.teamName,
//       index: props.index,
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [{}, refDrop] = ReactDnD.useDrop({
//     accept: OrganizationEntity.itemTypes.team,
//     hover(item: DragItem) {
//       if (!ref.current) return;

//       const dragIndex = item.index;
//       const hoverIndex = props.index;

//       if (dragIndex === hoverIndex) return;

//       props.moveTeam(dragIndex, hoverIndex);

//       item.index = hoverIndex;
//     },
//   });

//   refDrag(refDrop(ref));

//   return (
//     <StyledTeam ref={ref} className={`${isDragging ? 'isDragging' : ''}`}>
//       <StyledHeading>{props.teamName}</StyledHeading>
//       <Members.Component members={props.members} />
//     </StyledTeam>
//   );
// };

// const StyledHeading = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
// `;

// const StyledTeam = styled.div`
//   width: 300px;
//   cursor: move;

//   &.isDragging {
//     opacity: 0;
//   }
// `;
