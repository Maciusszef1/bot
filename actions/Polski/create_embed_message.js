module.exports = {

//---------------------------------------------------------------------
// Action Name
//
// This is the name of the action displayed in the editor.
//---------------------------------------------------------------------

name: "Stworz wiadomosc Embed",

//---------------------------------------------------------------------
// Action Section
//
// This is the section the action will fall into.
//---------------------------------------------------------------------

section: "Wiadomosci Embed",

//---------------------------------------------------------------------
// Action Subtitle
//
// This function generates the subtitle displayed next to the name.
//---------------------------------------------------------------------

subtitle: function(data) {
	return `${data.title}`;
},

//---------------------------------------------------------------------
	 // DBM Mods Manager Variables (Optional but nice to have!)
	 //
	 // These are variables that DBM Mods Manager uses to show information
	 // about the mods for people to see in the list.
	 //---------------------------------------------------------------------

	 // Who made the mod (If not set, defaults to "DBM Mods")
	 author: "DBM, ZockerNico",

	 // The version of the mod (Defaults to 1.0.0)
	 version: "1.9.5",//Added in 1.8.2

	 // A short description to show on the mod line for this mod (Must be on a single line)
	 short_description: "Changed category, added author url and the ability to customize the timestamp.",

	 // If it depends on any other mods by name, ex: WrexMODS if the mod uses something from WrexMods


	 //---------------------------------------------------------------------

//---------------------------------------------------------------------
// Action Storage Function
//
// Stores the relevant variable info for the editor.
//---------------------------------------------------------------------

variableStorage: function(data, varType) {
	const type = parseInt(data.storage);
	if(type !== varType) return;
	return ([data.varName, 'Embed Message']);
},

//---------------------------------------------------------------------
// Action Fields
//
// These are the fields for the action. These fields are customized
// by creating elements with corresponding IDs in the HTML. These
// are also the names of the fields stored in the action's JSON data.
//---------------------------------------------------------------------

fields: ["title", "author", "color", "url", "authorIcon", "authorUrl", "imageUrl", "thumbUrl", "timestamp", "timestamp1", "timestamp2", "text", "year", "month", "day", "hour", "minute", "second", "note1", "note2", "storage", "varName"],

//---------------------------------------------------------------------
// Command HTML
//
// This function returns a string containing the HTML used for
// editting actions.
//
// The "isEvent" parameter will be true if this action is being used
// for an event. Due to their nature, events lack certain information,
// so edit the HTML to reflect this.
//
// The "data" parameter stores constants for select elements to use.
// Each is an array: index 0 for commands, index 1 for events.
// The names are: sendTargets, members, roles, channels,
//                messages, servers, variables
//---------------------------------------------------------------------

html: function(isEvent, data) {
	return `
<div id ="wrexdiv" style="width: 550px; height: 350px; overflow-y: scroll; overflow-x: hidden;">
<div>
	<p>
		Ta akcja by??a modyfikowana przez DBM Mods i t??umaczona przez Meffiu#9999
	</p>
</div>
<div style="float: left; width: 50%; padding-top: 16px;">
	Tytu??:<br>
	<input id="title" class="round" type="text"><br>
	Nazwa Autora:<br>
	<input id="author" class="round" type="text" placeholder="Puste by usun????"><br>
	URL Autora:<br>
	<input id="authorUrl" class="round" type="text" placeholder="Puste by usun????"><br>
	Ikona URL Autora:<br>
	<input id="authorIcon" class="round" type="text" placeholder="Puste by usun????"><br>
</div>
<div style="float: right; width: 50%; padding-top: 16px;">
	Kolor:<br>
	<input id="color" class="round" type="text" placeholder="Puste by domy??lnie"><br>
	URL:<br>
	<input id="url" class="round" type="text" placeholder="Puste by usun????"><br>
	URL Zdj??cia:<br>
	<input id="imageUrl" class="round" type="text" placeholder="Puste by usun????"><br>
	URL Miniaturki:<br>
	<input id="thumbUrl" class="round" type="text" placeholder="Puste by usun????"><br>
</div>
<div style="float: left; width: 94%;">
	Znak czasu:<br>
	<select id="timestamp" class="round" onchange="glob.onChange(this)">
		<option value="false" selected>Brak</option>
		<option value="true">Aktualna Data</option>
		<option value="string">Data UTC</option>
		<option value="custom">Data w??asna</option>
	</select>
</div>
<div id="timestamp1" class="round" style="float: left; width: 104.6%; padding-top: 16px; display: none;">
	Znak czasu UTC:<br>
	<input id="text" class="round" type="text" placeholder="Wstaw znak czasu UTC...">
</div>
<div id="timestamp2" style="padding-top: 16px; display: table; width: 95.5%;">
	<div style="display: table-cell;">
		Rok:<br>
		<input id="year" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Miesi??c:<br>
		<input id="month" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Dzie??:<br>
		<input id="day" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Godzina:<br>
		<input id="hour" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Minuta:<br>
		<input id="minute" class="round" type="text">
	</div>
	<div style="display: table-cell;">
		Sekunda:<br>
		<input id="second" class="round" type="text">
	</div>
</div>
<div>
	<div style="float: left; width: 35%;">
		<br>Zapisz w:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer" style="float: right; width: 60%;">
		<br>Nazwa zmiennej:<br>
		<input id="varName" class="round" type="text"><br>
	</div>
</div>
<div id="note1" style="float: left; padding-top: 8px; width: 100%; display: none;">
	<h2>
		Data UTC<br>
	</h2>
	<p>
		To ustawienie dzia??a z formatami czasu takimi jak ???March 03, 1973 11:13:00??? lub ???100000000000??? (milisekundy).<br>
	</p>
</div>
<div id="note2" style="float: left; padding-top: 8px; width: 100%; display: none;">
	<h2>
		Data w??asna<br>
	</h2>
	<p>
		Poprawne wstawianie:<br>
		Rok: [2019] Miesi??c: [8] Dzie??: [10] Godzina: [ ] Minuta: [ ] Sekunda: [ ]<br>
		Niepoprawne wstawianie:<br>
		Rok: [2019] Miesi??c: [8] Dzie??: [ ] Godzina: [6] Minuta: [ ] Sekunda: [ ]<br>
	</p>
</div>
</div>`
},

//---------------------------------------------------------------------
// Action Editor Init Code
//
// When the HTML is first applied to the action editor, this code
// is also run. This helps add modifications or setup reactionary
// functions for the DOM elements.
//---------------------------------------------------------------------

init: function() {
	const {glob, document} = this;
	const timestamp = document.getElementById('timestamp1');
	const timestamp2 = document.getElementById('timestamp2');
	const note = document.getElementById('note1');
	const note2 = document.getElementById('note2');

	glob.onChange = function() {
		switch(document.getElementById('timestamp').value) {
			case "false":
			case "true":
				timestamp.style.display = 'none';
				timestamp2.style.display = 'none';
				note.style.display = 'none';
				note2.style.display = 'none';
				break;
			case "string":
				timestamp.style.display = 'table';
				timestamp2.style.display = 'none';
				note.style.display = null;
				note2.style.display = 'none';
				break;
			case "custom":
				timestamp.style.display = 'none';
				timestamp2.style.display = 'table';
				note.style.display = 'none';
				note2.style.display = null;
				break;

		};
	};

	document.getElementById('timestamp');

	glob.onChange(document.getElementById('timestamp'));
},

//---------------------------------------------------------------------
// Action Bot Function
//
// This is the function for the action within the Bot's Action class.
// Keep in mind event calls won't have access to the "msg" parameter,
// so be sure to provide checks for variable existance.
//---------------------------------------------------------------------

action: function(cache) {
	const data = cache.actions[cache.index];
	const embed = this.createEmbed();
	const text = this.evalMessage(data.text, cache);
	const year = parseInt(this.evalMessage(data.year, cache));
	const month = parseInt(this.evalMessage(data.month, cache)-1);
	const day = parseInt(this.evalMessage(data.day, cache));
	const hour = parseInt(this.evalMessage(data.hour, cache));
	const minute = parseInt(this.evalMessage(data.minute, cache));
	const second = parseInt(this.evalMessage(data.second, cache));

	//Title
	embed.setTitle(this.evalMessage(data.title, cache));

	//URL
	if(data.url) {
		embed.setURL(this.evalMessage(data.url, cache));
	};

	//Author Name
	if(data.author) {
		if(data.authorIcon && data.authorUrl) {
			embed.setAuthor(this.evalMessage(data.author, cache), this.evalMessage(data.authorIcon, cache), this.evalMessage(data.authorUrl, cache));
		} else if(data.authorIcon && !data.authorUrl) {
			embed.setAuthor(this.evalMessage(data.author, cache), this.evalMessage(data.authorIcon, cache));
		} else if(!data.authorIcon && data.authorUrl) {
			embed.setAuthor(this.evalMessage(data.author, cache), '', this.evalMessage(data.authorUrl, cache));
		} else {
			embed.setAuthor(this.evalMessage(data.author, cache));
		};
	};

	//Color
	if(data.color) {
		embed.setColor(this.evalMessage(data.color, cache));
	};

	//Image URL
	if(data.imageUrl) {
		embed.setImage(this.evalMessage(data.imageUrl, cache));
	};

	//Thumbnail URL
	if(data.thumbUrl) {
		embed.setThumbnail(this.evalMessage(data.thumbUrl, cache));
	};

	//Timestamp
	switch(parseInt(data.timestamp)) {
		case 0:
			embed.setTimestamp(new Date());
			break;
		case 1:
			if(text.length > 0) {
				embed.setTimestamp(new Date(`${text}`));
			} else {
				embed.setTimestamp(new Date());
				console.log('Invaild utc timestamp! Changed from [String Timestamp] to [Current Timestamp].');
			};
			break;
		case 2:
			if(year >= 1000 && year !== undefined && month >= 0 && month !== undefined && day >= 0 && day !== undefined && hour >= 0 && hour !== undefined && minute >= 0 && minute !== undefined && second >= 0 && second !== undefined) {
				if(year !== undefined && month !== undefined && day !== undefined && hour !== undefined && minute !== undefined && second !== undefined) {
					embed.setTimestamp(new Date(year, month, day, hour, minute, second));
				} else if(year !== undefined && month !== undefined && day !== undefined && hour !== undefined && minute !== undefined && second == undefined) {
					embed.setTimestamp(new Date(year, month, day, hour, minute));
				} else if(year !== undefined && month !== undefined && day !== undefined && hour !== undefined && minute == undefined && second == undefined) {
					embed.setTimestamp(new Date(year, month, day, hour));
				} else if(year !== undefined && month !== undefined && day !== undefined && hour == undefined && minute == undefined && second == undefined) {
					embed.setTimestamp(new Date(year, month, day));
				} else if(year !== undefined && month !== undefined && day == undefined && hour == undefined && minute == undefined && second == undefined) {
					embed.setTimestamp(new Date(year, month));
				} else if(year !== undefined && month == undefined && day == undefined && hour == undefined && minute == undefined && second == undefined) {
					embed.setTimestamp(new Date(year));
				} else {
					embed.setTimestamp(new Date());
					console.log('Invaild utc timestamp! Changed from [Custom Timestamp] to [Current Timestamp].');
				};
			} else {
				embed.setTimestamp(new Date());
				console.log('Invaild utc timestamp! from [Custom Timestamp] Changed to [Current Timestamp].');
			};
			break;
		default:
			embed.setTimestamp(new Date());
			break;
	};

	const storage = parseInt(data.storage);
	const varName = this.evalMessage(data.varName, cache);
	this.storeValue(embed, storage, varName, cache);
	this.callNextAction(cache);
},

//---------------------------------------------------------------------
// Action Bot Mod
//
// Upon initialization of the bot, this code is run. Using the bot's
// DBM namespace, one can add/modify existing functions if necessary.
// In order to reduce conflictions between mods, be sure to alias
// functions you wish to overwrite.
//---------------------------------------------------------------------

mod: function(DBM) {
	const DiscordJS = DBM.DiscordJS;
	const Actions = DBM.Actions;

	Actions.createEmbed = function() {
		return new DiscordJS.RichEmbed();
	};
}

}; // End of module
