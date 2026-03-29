# Data Model: Berlin Trash Quiz

## DisposalOutcome
- **Purpose**: Represents the disposal destination shown to the user.
- **Fields**:
  - `key`: stable identifier such as `paper`, `yellow`, `organic`, `residual`, `special`
  - `label_en`: English display label
  - `short_description_en`: short explanation for option cards and feedback
  - `special_handling`: boolean indicating the item should not be placed in a normal household bin
- **Relationships**:
  - Has many `DisposalItem` records as the primary recommended outcome

## DisposalItem
- **Purpose**: Represents a real-world item the user learns how to dispose of.
- **Fields**:
  - `slug`: stable identifier
  - `name_en`: English item name
  - `image_path`: optional illustration or image reference
  - `question_prompt_en`: quiz prompt text
  - `explanation_en`: plain-English explanation of the correct answer
  - `difficulty`: simple categorization for quiz selection
  - `source_note`: content validation note for Berlin rule review
  - `active`: whether the item is shown in the MVP
- **Relationships**:
  - Belongs to one `DisposalOutcome` as the primary answer
  - Has many `RuleNote` entries

## RuleNote
- **Purpose**: Captures Berlin-specific nuance or item-condition guidance.
- **Fields**:
  - `title_en`: short note title
  - `body_en`: explanation in plain English
  - `condition_type`: optional marker such as contamination, deposit, hazardous, glass-color nuance
  - `priority`: display order
- **Relationships**:
  - Belongs to one `DisposalItem`

## QuizQuestion
- **Purpose**: Runtime representation of a prompt shown during a quiz round.
- **Fields**:
  - `item_id`: linked disposal item
  - `option_keys`: ordered list of answer options for the round
  - `correct_option_key`: correct disposal outcome
  - `feedback_en`: answer explanation shown after submission
- **Relationships**:
  - Derived from `DisposalItem` and `DisposalOutcome`

## LearningProgress
- **Purpose**: Tracks lightweight on-device progress without accounts.
- **Fields**:
  - `rounds_completed`
  - `questions_answered`
  - `correct_answers`
  - `last_played_at`
  - `recent_item_slugs`
- **Relationships**:
  - Stored per device/session rather than as a user account

## Validation Rules
- Every active `DisposalItem` must have one primary `DisposalOutcome`.
- Every quiz item must include a non-empty English explanation.
- `special_handling=true` outcomes must be clearly differentiated in the UI from standard bin options.
- If an item has ambiguity, at least one `RuleNote` must capture the nuance.
