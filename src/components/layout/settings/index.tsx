import Logo from "@components/ui/logo";
import Select from "@components/ui/select";
import settings from "@data/settings";
import OffCanvas from "@components/ui/offCanvas";
import {
  OffCanvasCloseBtn,
  OffCanvasHead
} from "@components/ui/offCanvas/style";
import {
  SettingsWrap,
  SettingsItem,
  SettingsFooter
} from "@components/layout/settings/settings.style";
import { BiSupport } from "react-icons/bi";

const SettingsSidebar = ({ isOpen, onHandler }) => {
  return (
    <OffCanvas onHandler={onHandler} open={isOpen}>
      <OffCanvasHead>
        <Logo width={100} src="/images/logo/logo.svg" />
        <OffCanvasCloseBtn onClick={() => onHandler()}>x</OffCanvasCloseBtn>
      </OffCanvasHead>

      <SettingsWrap>
        <SettingsItem>
          <Select label="Language" options={settings.languages} />
        </SettingsItem>

        <SettingsItem>
          <Select label="Currency" options={settings.currencies} />
        </SettingsItem>
      </SettingsWrap>

      <SettingsFooter>
        <div className="support">
          <BiSupport />
          <a href="tel:"></a>
        </div>
        <p>© 2022 - Lorem ipsum, All Rights Reserved!</p>
      </SettingsFooter>
    </OffCanvas>
  );
};

export default SettingsSidebar;
