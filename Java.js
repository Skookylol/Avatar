function updateAvatar() {
    var hairType = document.getElementById("hair-type").value;
    var hairColor = document.getElementById("hair-color").value;
    var skinColor = document.getElementById("skin-color").value;
    var eyeColor = document.getElementById("eye-color").value;
    var mouthExpression = document.getElementById("mouth-expression").value;
    var clothesColor = document.getElementById("clothes-color").value;
    var accessoryType = document.getElementById("accessory-type").value;
    var backgroundColor = document.getElementById("background-color").value;

    // Update the avatar's background color
    document.getElementById("avatar").style.backgroundColor = backgroundColor;

    // Manage Hair
    var hairElement = document.getElementById("hair");
    hairElement.className = "hair " + hairType;
    hairElement.style.backgroundColor = hairColor;

    // Manage Face
    document.getElementById("face").style.backgroundColor = skinColor;
    document.getElementById("left-eye").style.backgroundColor = eyeColor;
    document.getElementById("right-eye").style.backgroundColor = eyeColor;

    // Manage Mouth
    var mouthElement = document.getElementById("mouth");
    mouthElement.className = "mouth " + mouthExpression;

    // Manage Clothes
    document.getElementById("clothes").style.backgroundColor = clothesColor;

    // Manage Accessories
    var accessoryElement = document.getElementById("accessory");
    accessoryElement.innerHTML = ""; // Clear previous accessories
    if (accessoryType === "glasses") {
        var glassesDiv = document.createElement("div");
        glassesDiv.className = "glasses";
        accessoryElement.appendChild(glassesDiv);
    } else if (accessoryType === "hat") {
        var hatDiv = document.createElement("div");
        hatDiv.style.width = "140px"; // Adjust hat width
        hatDiv.style.height = "20px"; // Adjust hat height
        hatDiv.style.backgroundColor = "black"; // Hat color
        hatDiv.style.position = "absolute";
        hatDiv.style.top = "10px"; // Positioning the hat
        hatDiv.style.left = "30px"; // Positioning the hat
        accessoryElement.appendChild(hatDiv);
    }
}

function randomizeAvatar() {
    var hairTypes = ['short-hair', 'long-hair', 'ponytail', 'braided', 'curly-hair', 'bald'];
    var hairColors = ['brown', 'black', 'blonde', 'red'];
    var skinTones = ['#ffcc99', '#d2a679', '#a67c52'];
    var eyeColors = ['black', 'blue', 'green', 'hazel'];
    var mouthExpressions = ['neutral', 'smile', 'frown'];
    var clothesColors = ['blue', 'red', 'green', 'purple'];
    var accessories = ['none', 'glasses', 'hat'];

    document.getElementById("hair-type").value = hairTypes[Math.floor(Math.random() * hairTypes.length)];
    document.getElementById("hair-color").value = hairColors[Math.floor(Math.random() * hairColors.length)];
    document.getElementById("skin-color").value = skinTones[Math.floor(Math.random() * skinTones.length)];
    document.getElementById("eye-shape").value = 'round-eye'; // Assuming default eye shape for simplicity
    document.getElementById("eye-color").value = eyeColors[Math.floor(Math.random() * eyeColors.length)];
    document.getElementById("mouth-expression").value = mouthExpressions[Math.floor(Math.random() * mouthExpressions.length)];
    document.getElementById("clothes-color").value = clothesColors[Math.floor(Math.random() * clothesColors.length)];
    document.getElementById("accessory-type").value = accessories[Math.floor(Math.random() * accessories.length)];
    document.getElementById("background-color").value = '#f1f1f1'; // Reset background

    updateAvatar();
}

function downloadAvatar() {
    var canvas = document.getElementById("avatarCanvas");
    var ctx = canvas.getContext("2d");

    // Draw background
    var backgroundColor = document.getElementById("avatar").style.backgroundColor;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw face
    var faceColor = document.getElementById("face").style.backgroundColor;
    ctx.fillStyle = faceColor;
    ctx.beginPath();
    ctx.arc(100, 125, 85, 0, Math.PI * 2); // Center at (100, 125), radius 85
    ctx.fill();

    // Draw eyes
    var eyeColor = document.getElementById("left-eye").style.backgroundColor;
    ctx.fillStyle = eyeColor;
    ctx.beginPath();
    ctx.arc(70, 110, 15, 0, Math.PI * 2); // Left eye
    ctx.fill();
    ctx.beginPath();
    ctx.arc(130, 110, 15, 0, Math.PI * 2); // Right eye
    ctx.fill();

    // Draw mouth
    ctx.fillStyle = document.getElementById("mouth").style.backgroundColor;
    ctx.beginPath();
    var mouthElement = document.getElementById("mouth");
    if (mouthElement.classList.contains("smile")) {
        ctx.arc(100, 160, 25, 0, Math.PI, false); // Mouth
    } else if (mouthElement.classList.contains("frown")) {
        ctx.arc(100, 160, 25, Math.PI, 0, true); // Frown
    } else {
        ctx.fillRect(75, 160, 50, 10); // Neutral
    }
    ctx.fill();

    // Draw hair
    var hairType = document.getElementById("hair-type").value;
    var hairColor = document.getElementById("hair").style.backgroundColor;
    ctx.fillStyle = hairColor;
    if (hairType === 'short-hair') {
        ctx.fillRect(15, 40, 170, 40); // Short hair
    } else if (hairType === 'long-hair') {
        ctx.fillRect(15, 40, 170, 70); // Long hair
    } else if (hairType === 'ponytail') {
        ctx.fillRect(15, 40, 170, 50); // Ponytail
    } else if (hairType === 'braided') {
        ctx.fillRect(15, 40, 170, 50); // Braided hair
    } else if (hairType === 'curly-hair') {
        ctx.beginPath();
        ctx.arc(100, 55, 85, 0, Math.PI, true); // Curly hair
        ctx.fill();
    }

    // Draw clothes
    ctx.fillStyle = document.getElementById("clothes").style.backgroundColor;
    ctx.fillRect(15, 175, 170, 70); // Clothes

    // Draw accessory
    var accessoryType = document.getElementById("accessory-type").value;
    if (accessoryType === "glasses") {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(55, 100, 40, 10); // Glasses frame
        ctx.fillRect(105, 100, 40, 10); // Glasses frame
    } else if (accessoryType === "hat") {
        ctx.fillStyle = "black";
        ctx.fillRect(30, 10, 140, 20); // Hat
    }

    // Download the image
    var link = document.createElement('a');
    link.download = 'avatar.png';
    link.href = canvas.toDataURL();
    link.click();
}