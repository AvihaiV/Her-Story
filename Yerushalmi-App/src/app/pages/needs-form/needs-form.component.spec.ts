import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NeedsFormComponent } from "./needs-form.component";

describe('NeedsFormComponent', () => {
  let component: NeedsFormComponent;
  let fixture: ComponentFixture<NeedsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
