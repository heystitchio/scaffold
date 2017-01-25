import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<nav class="navbar navbar-default" role="navigation">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Stitch</a>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li><a routerLink="/dashboard" routerLinkActive="active">Home</a></li>
      <li><a routerLink="/projects" routerLinkActive="active">Browse Projects</a></li>
      <li><a routerLink="/categories" routerLinkActive="active">Categories</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
		<div class="col-sm-9 col-md-9">
        		<form class="navbar-form" role="search">
        			<div class="input-group">
            			<input type="text" class="form-control" placeholder="Search" name="q">
            			<div class="input-group-btn">
                			<button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            			</div>
        			</div>
        		</form>
    		</div>
    		<li><a routerLink="/account" routerLinkActive="active">Account</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>


    <router-outlet></router-outlet>

<div class="above-footer">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h4>Join the community that is committed to making a difference in the world that we share</h4>
				<p>
					<button>Explore Projects</button>
					<button>Start a Project</button>
				</p>
			</div>
		</div>
	</div>
</div>	
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<h4>Stich</h4>
				<p>Lorem ipsum dolor sit amet, congue meliore eleifend vel in, in periculis temporibus pri. Forensibus consequuntur ne cum</p>
			</div>
			<div class="col-md-2">
				<ul>
					<li>Lorem ipsum dolor</li><li>sit ame congue meliore</li><li>eleifend vel in</li><li>periculis temporibus pri</li><li>Forensibus consequuntur ne cum</li>
				</ul>
			</div>
			<div class="col-md-2">
				<ul>
					<li>Lorem ipsum dolor</li><li>sit ame congue meliore</li><li>eleifend vel in</li><li>periculis temporibus pri</li><li>Forensibus consequuntur ne cum</li>
				</ul>
			</div>
			<div class="col-md-5">
				<h4>Search for a Project</h4>
        				<form role="search">
        					<div class="input-group" style="width:100%;">
            					<input type="text" class="form-control" placeholder="Search" name="q">
            					<div class="input-group-btn">
                					<button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            					</div>
        					</div>
        				</form>
			</div>
		</div>
	</div>
</footer>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Stitch | Projects';
}
