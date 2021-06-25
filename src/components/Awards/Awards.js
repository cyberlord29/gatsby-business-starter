import React from 'react'
import { 
    AwardsContainer, 
    AwardsLabel, 
    AwardsCard, 
    AwardsTitle,
    AwardsList,
    AwardTile,
    AwardTitle,
    AwardPosition,
    AwardYear,
} from './Awards.elements'

const Awards = () => {
    return (
        <AwardsContainer>
            <AwardsLabel>
                -- awards
            </AwardsLabel>
            <AwardsCard>
                <AwardsTitle>
                    Prestigious awards that we won
                </AwardsTitle>
                <AwardsList>
                    <AwardTile>
                        <AwardTitle>The Barnero Awards</AwardTitle>
                        <AwardPosition>Special Jury Award</AwardPosition>
                        <AwardYear>2020</AwardYear>
                    </AwardTile>
                    <AwardTile>
                        <AwardTitle>Nagato Arch</AwardTitle>
                        <AwardPosition>1st Runner Up</AwardPosition>
                        <AwardYear>2019</AwardYear>
                    </AwardTile>
                    <AwardTile>
                        <AwardTitle>The Europe Arch Priz V</AwardTitle>
                        <AwardPosition>Joint Winner</AwardPosition>
                        <AwardYear>2018</AwardYear>
                    </AwardTile>
                    <AwardTile>
                        <AwardTitle>Medal Architectur</AwardTitle>
                        <AwardPosition>1st Runner Up</AwardPosition>
                        <AwardYear>2016</AwardYear>
                    </AwardTile>
                </AwardsList>
            </AwardsCard>
        </AwardsContainer>
    )
}

export default Awards
