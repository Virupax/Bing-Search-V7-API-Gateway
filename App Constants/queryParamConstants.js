var COMMON_PARAMS = {
	market : 'mkt',	//The country where the user is making the request from. Omitted cc and setLang as mkt can be used in as combo for them.
	safeSearch	: 'safeSearch',	//Off, Moderate, Strict
	since	: 'since',
	sortBy	: 'sortBy',	//Date, Relevance
	textDecorations	: 'textDecorations',	//If true, the strings may include markers. The default is false.
	textFormat	: 'textFormat',	//Raw, HTML

}

var NEWS_PARAMS = {
	...COMMON_PARAMS,
	endPoint : '/news',
	category : 'category',	//The category of news articles to return.

}

var SEARCH_NEWS_PARAMS = {
	...COMMON_PARAMS,
	endPoint : '/news/search',
	count	: 'count',	//The default is 10 and the maximum is 100.
	freshness	: 'freshness',	//Within Day, Week, Month
	offset	: 'offset',	//Pagination 
	originalImg	: 'originalImg',	//
	query	: 'q',	//Query
}

var NEWS_TRENDING_TOPICS = {
	...COMMON_PARAMS,
	endPoint : '/news/trendingtopics',

}

module.exports = {
	COMMON_PARAMS : COMMON_PARAMS,
	NEWS_PARAMS : NEWS_PARAMS,
	SEARCH_NEWS_PARAMS	: SEARCH_NEWS_PARAMS,
	NEWS_TRENDING_TOPICS : NEWS_TRENDING_TOPICS
};