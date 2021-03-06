/*
 * Páginas
 */
import { LoginComponent }    from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent }     from './pages/main/main.component';
import { ProjectComponent }  from './pages/project/project.component';

export const PAGES: any[] = [
	LoginComponent,
	RegisterComponent,
	MainComponent,
	ProjectComponent
];

/*
 * Componentes
 */
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent }   from './components/dialogs/alert-dialog/alert-dialog.component';
import { FormDialogComponent }    from './components/dialogs/form-dialog/form-dialog.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ModelComponent }         from './components/model/model.component';
import { IncludesComponent }      from './components/includes/includes.component';
import { PluginsComponent }       from './components/plugins/plugins.component';


export const COMPONENTS: any[] = [
	ConfirmDialogComponent,
	AlertDialogComponent,
	FormDialogComponent,
	ConfigurationComponent,
	ModelComponent,
	IncludesComponent,
	PluginsComponent
];

/*
 * Pipes
 */
import { UrldecodePipe }  from './pipes/urldecode.pipe';

export const PIPES: any[] = [
	UrldecodePipe
];

/*
 * Servicios
 */
import { CommonService }    from './services/common.service';
import { ApiService }       from './services/api.service';
import { DataShareService } from './services/data-share.service';
import { UserService }      from './services/user.service';
import { AuthService }      from './services/auth.service';
import { DialogService }    from './services/dialog.service';

export const SERVICES: any[] = [
	CommonService,
	ApiService,
	DataShareService,
	UserService,
	AuthService,
	DialogService
];

/*
 * Componentes Angular Material
 */
import { MatToolbarModule }     from '@angular/material/toolbar';
import { MatCardModule }        from '@angular/material/card';
import { MatButtonModule }      from '@angular/material/button';
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatIconModule }        from '@angular/material/icon';
import { MatListModule }        from '@angular/material/list';
import { MatSidenavModule }     from '@angular/material/sidenav';
import { MatDialogModule }      from '@angular/material/dialog';
import { MatSelectModule }      from '@angular/material/select';
import { MatTabsModule }        from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule }    from '@angular/material/checkbox';
import { MatRadioModule }       from '@angular/material/radio';

export const MATERIAL: any[] = [
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatDialogModule,
	MatSelectModule,
	MatTabsModule,
	MatSlideToggleModule,
	MatCheckboxModule,
	MatRadioModule
];