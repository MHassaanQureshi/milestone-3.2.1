document.addEventListener('DOMContentLoaded', () => {
    const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;
    const skillsContainer = document.getElementById('skills-container') as HTMLDivElement;
    let skillCount = 1;

    addSkillButton.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('skills-form');
        newDiv.setAttribute('id', `skill-${skillCount}`);

        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', `skills-${skillCount}`);
        newLabel.textContent = 'Skill:';

        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'skills';
        newInput.id = `skills-${skillCount}`;
        newInput.classList.add('user-skills');

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        (function (count: number) {
            removeButton.addEventListener('click', () => removeSkill(count));
        })(skillCount);

        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        newDiv.appendChild(removeButton);

        skillsContainer.appendChild(newDiv);
        skillCount++;
    });

    function removeSkill(id: number): void {
        const skillToRemove = document.getElementById(`skill-${id}`);
        if (skillToRemove) {
            skillsContainer.removeChild(skillToRemove);
        }
    }

    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const educationContainer = document.getElementById('Education-container') as HTMLDivElement;
    let educationCount = 1;

    addEducationButton.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('education-form');
        newDiv.setAttribute('id', `education-${educationCount}`);

        const programPart = document.createElement('div');
        programPart.setAttribute('id', `program-part-${educationCount}`);

        const programLabel = document.createElement('label');
        programLabel.setAttribute('for', `program-${educationCount}`);
        programLabel.textContent = 'Program:';

        const programInput = document.createElement('input');
        programInput.type = 'text';
        programInput.name = 'program';
        programInput.id = `program-${educationCount}`;

        programPart.appendChild(programLabel);
        programPart.appendChild(programInput);

        const schoolPart = document.createElement('div');
        schoolPart.setAttribute('id', `school-part-${educationCount}`);

        const schoolLabel = document.createElement('label');
        schoolLabel.setAttribute('for', `school-${educationCount}`);
        schoolLabel.textContent = 'School:';

        const schoolInput = document.createElement('input');
        schoolInput.type = 'text';
        schoolInput.name = 'school';
        schoolInput.id = `school-${educationCount}`;

        schoolPart.appendChild(schoolLabel);
        schoolPart.appendChild(schoolInput);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.style.width = '24px';
        removeButton.style.height = '24px';
        removeButton.style.backgroundImage = "url('minus-sign.png')";
        removeButton.style.backgroundSize = 'contain';
        removeButton.style.backgroundRepeat = 'no-repeat';
        removeButton.style.border = 'none';

        (function (count: number) {
            removeButton.addEventListener('click', () => removeEducation(count));
        })(educationCount);

        newDiv.appendChild(programPart);
        newDiv.appendChild(schoolPart);
        newDiv.appendChild(removeButton);

        educationContainer.appendChild(newDiv);
        educationCount++;
    });

    function removeEducation(id: number): void {
        const educationToRemove = document.getElementById(`education-${id}`);
        if (educationToRemove) {
            educationContainer.removeChild(educationToRemove);
        }
    }

    const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
    const experienceContainer = document.getElementById('Experience-container') as HTMLDivElement;
    let experienceCount = 1;

    addExperienceButton.addEventListener('click', () => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('experience-form');
        newDiv.setAttribute('id', `experience-${experienceCount}`);

        const positionPart = document.createElement('div');
        positionPart.setAttribute('id', `experience-position-part-${experienceCount}`);

        const positionLabel = document.createElement('label');
        positionLabel.setAttribute('for', `position-${experienceCount}`);
        positionLabel.textContent = 'Position:';

        const positionInput = document.createElement('input');
        positionInput.type = 'text';
        positionInput.name = 'position';
        positionInput.id = `position-${experienceCount}`;

        positionPart.appendChild(positionLabel);
        positionPart.appendChild(positionInput);

        const durationPart = document.createElement('div');
        durationPart.setAttribute('id', `experience-duration-part-${experienceCount}`);

        const durationLabel = document.createElement('label');
        durationLabel.setAttribute('for', `duration-${experienceCount}`);
        durationLabel.textContent = 'Duration:';

        const durationInput = document.createElement('input');
        durationInput.type = 'text';
        durationInput.name = 'duration';
        durationInput.id = `duration-${experienceCount}`;

        durationPart.appendChild(durationLabel);
        durationPart.appendChild(durationInput);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.style.width = '24px';
        removeButton.style.height = '24px';
        removeButton.style.backgroundImage = "url('minus-sign.png')";
        removeButton.style.backgroundSize = 'contain';
        removeButton.style.backgroundRepeat = 'no-repeat';
        removeButton.style.border = 'none';

        (function (count: number) {
            removeButton.addEventListener('click', () => removeExperience(count));
        })(experienceCount);


        newDiv.appendChild(positionPart);
        newDiv.appendChild(durationPart);
        newDiv.appendChild(removeButton);

        experienceContainer.appendChild(newDiv);
        experienceCount++;
    });
    function removeExperience(id: number): void {
        const experienceToRemove = document.getElementById(`experience-${id}`);
        if (experienceToRemove) {
            experienceContainer.removeChild(experienceToRemove);
        }
    }

    // Handle Resume Generation
    const generateCVButton = document.getElementById('generatecv') as HTMLButtonElement;
    const cvop = document.getElementById('cvop') as HTMLDivElement;

    generateCVButton.addEventListener('click', () => {
        cvop.style.display = "block";

        // Update personal details in CV
        const userName = document.getElementById('user-name') as HTMLInputElement;
        const userRole = document.getElementById('user-role') as HTMLInputElement;
        const userContact = document.getElementById('user-contact') as HTMLInputElement;
        const userEmail = document.getElementById('user-email') as HTMLInputElement;
        const userAddress = document.getElementById('user-address') as HTMLInputElement;

        document.getElementById('name-updated')!.innerText = userName.value;
        document.getElementById('role-updated')!.innerText = userRole.value;
        document.getElementById('number-updated')!.innerText = `Phone No: ${userContact.value}`;
        document.getElementById('email-updated')!.innerText = `Email: ${userEmail.value}`;
        document.getElementById('address-updated')!.innerText = `Address: ${userAddress.value}`;
       
        // Get and update skills
        const skillsListInCV = document.querySelector('.skills-list2') as HTMLDivElement;
        skillsListInCV.innerHTML = ''; // Clear existing skills

        const skillInputs = document.querySelectorAll('input[name="skills"]') as NodeListOf<HTMLInputElement>;
        skillInputs.forEach(input => {
            const skillValue = input.value.trim();
            if (skillValue) {
                const listItem = document.createElement('div');
                listItem.textContent = skillValue;
                skillsListInCV.appendChild(listItem);
            }
        });

        // Get and update education
        const educationListInCV = document.getElementById('education-list') as HTMLUListElement;
        educationListInCV.innerHTML = ''; // Clear existing education

        const educationInputs = document.querySelectorAll('.education-form') as NodeListOf<HTMLDivElement>;
        educationInputs.forEach(div => {
            const programInput = div.querySelector('input[name="program"]') as HTMLInputElement;
            const schoolInput = div.querySelector('input[name="school"]') as HTMLInputElement;
            const programValue = programInput.value.trim();
            const schoolValue = schoolInput.value.trim();

            if (programValue && schoolValue) {
                const listItem = document.createElement('li');
                listItem.textContent = `${programValue} at ${schoolValue}`;
                educationListInCV.appendChild(listItem);
            }
        });

        // Get and update experience
        const experienceListInCV = document.getElementById('experience-list') as HTMLUListElement;
        experienceListInCV.innerHTML = ''; // Clear existing experience

        const experienceInputs = document.querySelectorAll('.experience-form') as NodeListOf<HTMLDivElement>;
        experienceInputs.forEach(div => {
            const positionInput = div.querySelector('input[name="position"]') as HTMLInputElement;
            const durationInput = div.querySelector('input[name="duration"]') as HTMLInputElement;
            const positionValue = positionInput.value.trim();
            const durationValue = durationInput.value.trim();

            if (positionValue && durationValue) {
                const listItem = document.createElement('li');
                listItem.textContent = `${positionValue} (${durationValue})`;
                experienceListInCV.appendChild(listItem);
            }
        });
    });
});
