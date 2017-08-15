// $(document).ready(function() {
// 	console.log("hello")
// })

function MarkdownController(markdownModel,view){
  this.inputField = $('.input-field')
  this.markdownModel = markdownModel;
  this.view = view
  // this.handleTyping = function(){
    // this.inputField.text();
  // }
}

MarkdownController.prototype.bindEvents = function(){
  var markdownModel = this.markdownModel
  var view = this.view
  this.inputField.on('keyup', function(e){
    markdownModel.updateMarkdown($(this).val())
    view.display(markdownModel.output_value)
  })
}

function MarkdownView() {
  this.html = '<div id="preview" class="container">Your Output stuff</div>'
}

MarkdownView.prototype.display = function(html){
  if(!html){
    $('#preview').replaceWith(this.html)
  } else {
    $('#preview').html(html)
  }
}

function MarkdownModel(){
  this.input_value = ''
  this.output_value = ''
}

MarkdownModel.prototype.updateMarkdown = function(sometext){
var text = sometext
	text = text.replace(/\*\*(.*)\*\*/g, "<i>$1</i>");
	text = text.replace(/_(.*)_/g, "<i>$1</i>");
	text = text.replace(/[\*]/g, "<li>");
	text = text.replace(/[\#]/g, "<h1>");
	text = text.replace(/\)

	this.output_value = text

// 							                      	   

}

$(document).ready(function() {

  // setup
  var model = new MarkdownModel()
  var view = new MarkdownView()
  view.display()
  var controller = new MarkdownController(model,view)
  controller.bindEvents();
  view.display(model)

})